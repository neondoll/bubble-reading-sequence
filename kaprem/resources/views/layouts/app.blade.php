<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Кадровый резерв') }}</title>
    <link rel="icon" href="{!! asset('/favicon.ico') !!}"/>

    <!-- Scripts -->
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/app.js') }}" defer></script>


    <!-- Styles -->
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

</head>
<style>
    body {
        background: url({{ asset('images/bg-main.svg') }}) no-repeat;
        background-size: 100%;
        /*background-attachment: fixed;*/

    }
</style>
<body>
<div id="wrap">
    @yield('content')
</div>


</body>

</html>
