$(window).load
(
    function()
    {
        $('.flexslider').flexslider
        (
            {
                animation: "slide",
                controlNav: "thumbnails"
            }
        );

        $('#emailMillie').submit
        (
            function(e)
            {
                e.preventDefault();
                var truah = true;
                if(document.getElementById('name').value === '')
                {
                    truah = false;
                    $('.contact-form form .nameLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic">Enter your name</span>');
                }
                if(document.getElementById('subject').value === '')
                {
                    truah = false;
                    $('.contact-form form .subjectLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic">Enter a subject</span>');
                }
                if(document.getElementById('message').value === '')
                {
                    truah = false;
                    $('.contact-form form .messageLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic">Enter your message</span>');
                }
                if(!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test
                (document.getElementById('email').value))
                {
                    truah = false;
                    $('.contact-form form .emailLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic">Invalid email address</span>');
                }
                if(truah)
                {
                    $.ajax
                    (
                        {
                            type: 'POST',
                            url: "https://mandrillapp.com/api/1.0/messages/send.json",
                            data:
                            {
                                'key': 'AhCDlUC_tPgLKr8Cmt-Nmg',
                                'message':
                                {
                                    'from_email': document.getElementById('email').value,
                                    'from_name': document.getElementById('name').value,
                                    'to': [{'email': 'info@milliecreperie.com'}],
                                    'subject': document.getElementById('subject').value,
                                    'text': document.getElementById('message').value
                                }
                            }
                        }
                    )
                    .done
                    (
                        function()
                        {
                            $('.contact-form form').fadeOut
                            (
                                'fast',
                                function()
                                {
                                    $('.contact-form').append('<p><span class="violet">Thanks for contacting us!</span> We will get back to you very soon.</p>');
                                }
                            );
                        }
                    )
                }
            }
        );
    }
);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-48980260-1', 'auto');
ga('send', 'pageview');
