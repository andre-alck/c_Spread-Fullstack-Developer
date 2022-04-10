<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Meu terceiro site em PHP.</title>

        <link
            rel="stylesheet"
            href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css"
        />
        <link rel="stylesheet" href="/resources/demos/style.css" />

        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
        <script>
            $(function () {
                $("#accordion").accordion();
            });
        </script>
    </head>
    <body>
        <div id="accordion">
            <h1>First Header</h1>
            <div><p>First content panel</p></div>
            <h1>Second Header</h1>
            <div><p>Second content panel</p></div>
        </div>
    </body>
</html>