<?php

namespace App\Helpers\Classes;

use PhpOffice\PhpWord\Exception\Exception;
use PhpOffice\PhpWord\TemplateProcessor;

class WordTemplate extends TemplateProcessor
{
    public function setValues(array $values, $limit = self::MAXIMUM_REPLACEMENTS_DEFAULT)
    {
        foreach ($values as $key => $value) {
            $this->setValue($key, $value, $limit);
        }
    }

    /**
     * @throws Exception
     */
    public function cloneRowAndSetValues($search, $values)
    {
        $this->cloneRow($search, count($values));

        $rowNumber = 1;
        foreach ($values as $rowData) {
            foreach ($rowData as $macro => $replace) {
                $this->setValue($macro . '#' . $rowNumber, $replace);
            }
            $rowNumber++;
        }
    }
}
