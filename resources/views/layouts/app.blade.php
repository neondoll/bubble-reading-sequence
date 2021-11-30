<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Управление имуществом') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/app.js') }}" defer></script>


    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

</head>

<style>
    /*body {
        background: url({{ asset('images/bg-main.svg') }}) no-repeat;
        background-size: 100%;
        //background-attachment: fixed;
        z-index: -2;
    }*/
</style>

<body>
<div id="wrap">
    @yield('content')
</div>
</body>
</html>
