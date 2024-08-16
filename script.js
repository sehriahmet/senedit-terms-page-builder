document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file && file.type === "text/html") {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            let content = e.target.result;
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');

            const metaCharset = doc.querySelector('meta[charset]');
            if (!metaCharset) {
                const metaElement = document.createElement('meta');
                metaElement.setAttribute('charset', 'UTF-8');
                doc.head.insertBefore(metaElement, doc.head.firstChild);
            }

            const mainContainer = document.createElement('div');
            mainContainer.classList.add('main-container');

            while (doc.body.firstChild) {
                mainContainer.appendChild(doc.body.firstChild);
            }

            doc.body.appendChild(mainContainer);

            const wordSection1 = doc.querySelector('.WordSection1');
            if (wordSection1) {
                wordSection1.className = 'contact_right terms';
                
                const contactLeft = document.createElement('div');
                contactLeft.className = 'contact_left terms';
                
                wordSection1.parentNode.insertBefore(contactLeft, wordSection1);
            }

            const contactRight = doc.querySelector('.contact_right');
            const contactLeft = doc.querySelector('.contact_left');
            if (contactRight && contactLeft) {
                const classNames = [
                    'MsoListParagraphCxSpFirst', 
                    'MsoListParagraphCxSpMiddle', 
                    'MsoListParagraphCxSpLast'
                ];

                classNames.forEach(className => {
                    const paragraphs = contactRight.getElementsByClassName(className);
                    
                    Array.from(paragraphs).forEach(paragraph => {
                        if (paragraph.getElementsByTagName('a').length > 0) {
                            contactLeft.innerHTML += paragraph.outerHTML;
                        }
                    });
                });
            }

            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = 'https://ahmetgorev2.asehriyar.com/style.css';
            doc.head.appendChild(linkElement);

            /*
            const scriptElement = document.createElement('script');
            scriptElement.src = 'https://ahmetgorev2.asehriyar.com/script.js';
            doc.body.appendChild(scriptElement);
            */

            const modifiedContent = new XMLSerializer().serializeToString(doc);

            // Display the modified content
            document.getElementById('fileContent').innerHTML = modifiedContent;

            // Enable the download button and attach click event to download the file
            const downloadButton = document.getElementById('downloadButton');
            downloadButton.style.display = 'flex';
            downloadButton.onclick = function() {
                const blob = new Blob([modifiedContent], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'test.html';
                a.click();
                URL.revokeObjectURL(url);
            };
        };

        reader.readAsText(file);
    } else {
        alert('Please upload a valid HTML file.');
    }
});
