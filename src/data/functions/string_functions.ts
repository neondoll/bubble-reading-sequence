const textWrapping = (text: string, lineLength: number) => {
    let currentLineLength = 0;
    let currentText = "";

    text.replace("\n", " ").split(" ").forEach((word: string) => {
        if (currentLineLength > 0) {
            if (currentLineLength + word.length > lineLength) {
                currentText += ("\n" + word);
                currentLineLength = word.length;
            } else {
                currentText += (" " + word);
                currentLineLength += word.length;
            }
        } else {
            currentText += word;
            currentLineLength = word.length;
        }
    });

    return currentText;
};

export {textWrapping};