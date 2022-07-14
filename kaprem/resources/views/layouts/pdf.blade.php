<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Объекты</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
        @page page-landscape { size: landscape; }
        @page page-portrait { size: portrait; }

        div.landscape { page: page-landscape; }
        div.portrait { page: page-portrait; }

        body{
            font-family: "Times New Roman", serif;
        }
    </style>
</head>
<body>
@yield('content')
</body>
</html>
