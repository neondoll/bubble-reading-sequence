<?php

namespace App\Helpers\Classes;

class ArrayHelper
{
    public static function toString($array): string
    {
        $number = 0;
        $string = "";
        foreach ($array as $key => $value) {
            if ($number) {
                $string = $string . ", ";
            }
            $string .= match (gettype($value)) {
                "array" => match (gettype($key)) {
                    "integer" => self::toString($value),
                    default => "$key { " . self::toString($value) . " }",
                },
                default => match (gettype($key)) {
                    "integer" => "$value",
                    default => "$key { $value }",
                },
            };
            $number++;
        }
        return $string;
    }
}
