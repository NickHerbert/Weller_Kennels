function ipCounter(event) {
    var maxentries = 1000;

    var textarea = "#ip-textarea";
    var max_msg = "#ip-max-msg";
    var min_msg = "#ip-min-msg";
    var entry_count = "#ip-display_count";

    var regex = /\s+/gi;

    // Prevents empty string from being counted as '1'
    if ($(textarea).val() == "") {
        numberOfItems = 0;
    }
    else {
        var entryText = $(textarea).val().trim().replace(regex, ' ').split(' ');
        var numberOfItems = entryText.length;
    }

    // Handles if entries are individually typed
    if (numberOfItems < maxentries) {
        if(numberOfItems == 0) {
            $(min_msg).show();
            $(max_msg).hide();
        }
        else {
            $(min_msg).hide();
            $(max_msg).hide();
        }
    }
    else if (numberOfItems >= maxentries) {
        // Prevents typing any words after the maximum number of words is reached
        if (event.keyCode == 13 || event.keyCode == 32) {
            console.log("You hit space or enter after max word");
            $(max_msg).show();
            return false;
        }
    }

    $('textarea').on('paste', function(e) {
        pastedInput = e.originalEvent.clipboardData.getData('text');
        separatedInput = pastedInput.replace(regex, ' ').split(' ');
        totalpastedCount = separatedInput.length;

        // This handles if clipboard content is maximum number of entries or more
        if (totalpastedCount >= maxentries) {
            $(max_msg).show();
            trimmedInput = (separatedInput.length = maxentries);
            mergedTrimmed = separatedInput.join(' ');
            $(textarea).val(mergedTrimmed);
            e.preventDefault();
        }

        // Below handles if user pastes in multiple chunks
        // If nothing has been added to input yet only add up what's on the clipboard
        // otherwise combine what's already in the input to what's on the clipboard
        if (entryText == undefined) {
            allInput = separatedInput;
        }
        else {
            allInput = entryText.concat(separatedInput);
        }

        totalNumber = allInput.length;

        if (totalNumber >= maxentries) {
            $(max_msg).show();
            allInput.length = maxentries;
            mergedTrimmedAll = allInput.join(' ');
            $(textarea).val(mergedTrimmedAll);
            e.preventDefault();

            $(entry_count).html(allInput.length);
        }
    });

    $(entry_count).html(numberOfItems);
}

function webCounter(event) {
    var maxentries = 1000;

    var textarea = "#website-textarea";
    var max_msg = "#web-max-msg";
    var min_msg = "#web-min-msg";
    var entry_count = "#web-display_count";

    var regex = /\s+/gi;

    // Prevents empty string from being counted as '1'
    if ($(textarea).val() == "") {
        numberOfItems = 0;
    }
    else {
        var entryText = $(textarea).val().trim().replace(regex, ' ').split(' ');
        var numberOfItems = entryText.length;
    }

    // Handles if entries are individually typed
    if (numberOfItems < maxentries) {
        if(numberOfItems == 0) {
            $(min_msg).show();
            $(max_msg).hide();
        }
        else {
            $(min_msg).hide();
            $(max_msg).hide();
        }
    }
    else if (numberOfItems >= maxentries) {
        // Prevents typing any words after the maximum number of words is reached
        if (event.keyCode == 13 || event.keyCode == 32) {
            console.log("You hit space or enter after max word");
            $(max_msg).show();
            return false;
        }
    }

    $('textarea').on('paste', function(e) {
        pastedInput = e.originalEvent.clipboardData.getData('text');
        separatedInput = pastedInput.replace(regex, ' ').split(' ');
        totalpastedCount = separatedInput.length;

        // This handles if clipboard content is maximum number of entries or more
        if (totalpastedCount >= maxentries) {
            $(max_msg).show();
            trimmedInput = (separatedInput.length = maxentries);
            mergedTrimmed = separatedInput.join(' ');
            $(textarea).val(mergedTrimmed);
            e.preventDefault();
        }

        // Below handles if user pastes in multiple chunks
        // If nothing has been added to input yet only add up what's on the clipboard
        // otherwise combine what's already in the input to what's on the clipboard
        if (entryText == undefined) {
            allInput = separatedInput;
        }
        else {
            allInput = entryText.concat(separatedInput);
        }

        totalNumber = allInput.length;

        if (totalNumber >= maxentries) {
            $(max_msg).show();
            allInput.length = maxentries;
            mergedTrimmedAll = allInput.join(' ');
            $(textarea).val(mergedTrimmedAll);
            e.preventDefault();

            $(entry_count).html(allInput.length);
        }
    });

    $(entry_count).html(numberOfItems);
};

function ippluswebCounter(event) {
    var maxentries = 1000;

    var textarea = "#ip-web-textarea";
    var max_msg = "#ip-web-max-msg";
    var min_msg = "#ip-web-min-msg";
    var entry_count = "#ip-web-display_count";

    var regex = /\s+/gi;

    // Prevents empty string from being counted as '1'
    if ($(textarea).val() == "") {
        numberOfItems = 0;
    }
    else {
        var entryText = $(textarea).val().trim().replace(regex, ' ').split(' ');
        var numberOfItems = entryText.length;
    }

    // Handles if entries are individually typed
    if (numberOfItems < maxentries) {
        if(numberOfItems == 0) {
            $(min_msg).show();
            $(max_msg).hide();
        }
        else {
            $(min_msg).hide();
            $(max_msg).hide();
        }
    }
    else if (numberOfItems >= maxentries) {
        // Prevents typing any words after the maximum number of words is reached
        if (event.keyCode == 13 || event.keyCode == 32) {
            console.log("You hit space or enter after max word");
            $(max_msg).show();
            return false;
        }
    }

    $('textarea').on('paste', function(e) {
        pastedInput = e.originalEvent.clipboardData.getData('text');
        separatedInput = pastedInput.replace(regex, ' ').split(' ');
        totalpastedCount = separatedInput.length;

        // This handles if clipboard content is maximum number of entries or more
        if (totalpastedCount >= maxentries) {
            $(max_msg).show();
            trimmedInput = (separatedInput.length = maxentries);
            mergedTrimmed = separatedInput.join(' ');
            $(textarea).val(mergedTrimmed);
            e.preventDefault();
        }

        // Below handles if user pastes in multiple chunks
        // If nothing has been added to input yet only add up what's on the clipboard
        // otherwise combine what's already in the input to what's on the clipboard
        if (entryText == undefined) {
            allInput = separatedInput;
        }
        else {
            allInput = entryText.concat(separatedInput);
        }

        totalNumber = allInput.length;

        if (totalNumber >= maxentries) {
            $(max_msg).show();
            allInput.length = maxentries;
            mergedTrimmedAll = allInput.join(' ');
            $(textarea).val(mergedTrimmedAll);
            e.preventDefault();

            $(entry_count).html(allInput.length);
        }
    });

    $(entry_count).html(numberOfItems);
};


$(document).ready(function() {
    // Hide all the entry guideline messages (max or min)
    $(".entry-guideline-msg").hide();

    // This chunk works as is
    $('#ip-textarea').change(ipCounter);
    $('#ip-textarea').keydown(ipCounter);
    $('#ip-textarea').keypress(ipCounter);
    $('#ip-textarea').keyup(ipCounter);
    $('#ip-textarea').blur(ipCounter);
    $('#ip-textarea').focus(ipCounter);
    $('#ip-textarea').onclick=ipCounter;
    $('#ip-textarea').bind('input', ipCounter);

    $('#website-textarea').change(webCounter);
    $('#website-textarea').keydown(webCounter);
    $('#website-textarea').keypress(webCounter);
    $('#website-textarea').keyup(webCounter);
    $('#website-textarea').blur(webCounter);
    $('#website-textarea').focus(webCounter);
    $('#website-textarea').onclick=webCounter;
    $('#website-textarea').bind('input', webCounter);

    $('#ip-web-textarea').change(ippluswebCounter);
    $('#ip-web-textarea').keydown(ippluswebCounter);
    $('#ip-web-textarea').keypress(ippluswebCounter);
    $('#ip-web-textarea').keyup(ippluswebCounter);
    $('#ip-web-textarea').blur(ippluswebCounter);
    $('#ip-web-textarea').focus(ippluswebCounter);
    $('#ip-web-textarea').onclick=ippluswebCounter;
    $('#ip-web-textarea').bind('input', ippluswebCounter);

});
