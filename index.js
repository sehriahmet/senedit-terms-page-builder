console.log('hello');

$('a[href^="#"]').click(function () {
    const targetName = $.attr(this, 'href').substr(1);

    const targetElement = $('.contact_right').find('[name="' + targetName + '"]');

    const container = $('.contact_right');
    console.log(container);
    if (targetElement.length && container.length) {
        const scrollTopValue = targetElement.offset().top - container.offset().top + container.scrollTop();
        
        console.log({
            'Target name:': targetName,
            'Target element:': targetElement,
            'Container:': container,
            'Calculated scrollTop:': scrollTopValue
        });

        container.animate({
            scrollTop: scrollTopValue
        }, 700);
    } else {
        console.log('Element or container not found.');
    }

    return false;
});

$('.on-bilgilendirme').click(function () {
    const container = $('.contact_right');

    if (container.length) {
        // Scroll to the top of the .contact_right container
        container.animate({
            scrollTop: 0
        }, 700);
        
        console.log('Scrolled to the top of contact_right.');
    } else {
        console.log('Container not found.');
    }

    return false; // Prevent default anchor behavior
});