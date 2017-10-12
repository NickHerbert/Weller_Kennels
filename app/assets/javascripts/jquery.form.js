/**
 * Created by melissataylor on 11/29/16.
 */


function toggleNotify(nplace, action) {
    if (nplace.trim() != "") {
        var target_name = '#msg_' + nplace;
        if ($(target_name)) {
            var notice_target = $(target_name);
            if (action == "show") {
                notice_target.removeClass('hidden').show()
            }
            else {
                notice_target.addClass('hidden').hide()
                }

            }
        }
    }


function fieldEmpty(nm) {
    if($("[name=" + nm + "]")) {
        return ( $("[name=" + nm + "]").val().trim() == "" )
    } else {
        return true;
    }
}

function validateForm() {
    validateUserName();
    validateUserEmail();
    confirmUserEmail();
    validateDomain();
    validateProblem();
    validateItems();
}

function validateUserName() {
    if(fieldEmpty('user_name')) {
        action = 'show'
    } else {
        action = 'hide'
    }
    toggleNotify('user_name',action);
    return true;
}

function validateProblem() {
    if(fieldEmpty('problem')) {
        action = 'show'
    } else {
        action = 'hide'
    }
    toggleNotify('problem',action);
    return true;
}

function validateItems() {
    var regex = /\s+/gi;

    var currentType =  $("input[type=radio][name='ticket']:checked").val()
    switch(currentType) {
        case "email":
            if ( $("#ip-textarea").val().trim().replace(regex, ' ').split(' ') == '' )
                $('#ip-min-msg').removeClass('hidden').show();
            break;
        case "web":
            if ( $("#website-textarea").val().trim().replace(regex, ' ').split(' ') == '' )
                $('#web-min-msg').removeClass('hidden').show();
            break;
        case "email_web":
            if ( $("#ip-web-textarea").val().trim().replace(regex, ' ').split(' ') == '' )
                $('#ip-web-min-msg').removeClass('hidden').show();
            break;
        case "other":
            break;
        default:
            break;
    }
    return true;
}

function validateUserEmail() {
    var email1 = $("input[name=user_email]");
    var notice_target = $('#msg_user_email');
    if(fieldEmpty('user_email') == false) {
        var reg = /.+@.+/;
        if( reg.test(email1.val()) == false ) {
            notice_target.removeClass('hidden').show();
        } else {
            notice_target.addClass('hidden').hide();
            confirmUserEmail();
        }
    }
    else {
        notice_target.removeClass('hidden').show();
    }
    return true;
}

function confirmUserEmail() {
    var email2 = $("input[name=email_confirmation]");
    var email1 = $("input[name=user_email]");

    notice_target = $('#msg_email_confirmation');
    if(fieldEmpty('email_confirmation') == true) {
        notice_target.removeClass('hidden').show();
        return false;
    }
    else if (email1.val() != "" && email2.val() !== email1.val()) {
        notice_target.removeClass('hidden').show();
        return false;
    }
    else {
        // Removes message if user fixes error
        if (email2.val() == email1.val()) {
            notice_target.addClass('hidden').hide();
            return true;
        }
    }
    return true;
}

function validateDomain() {

    var domainName = $("input[name=domain]").val().trim();
    var domainField = $('#msg_domain');
    if (domainName.indexOf('.') == -1) {
        domainField.removeClass('hidden').show();
    }

    if (domainName.indexOf('.') !== -1) {
        domainField.addClass('hidden').hide();
    }
    return true;
}

function validateReputationLookup() {
    if( $('#rep-lookup').val().trim() == "") {
        alert("Please provide a search term: IP, domain, or network owner");
    }
}

function adjustRequired(makeRequired, remove1, remove2, remove3) {
    if(makeRequired != null && !makeRequired.attr('required')) {
        makeRequired.attr('required','required');
    }
    if(remove1.attr('required'))
        remove1[0].removeAttribute('required');
    if(remove2.attr('required'))
        remove2[0].removeAttribute('required');
    if(remove3 != null && remove3.attr('required')) {
        remove3[0].removeAttribute('required');
    }
}

// Ticket type validation
$(document).ready(function() {

    var iptext = $("#ip-textarea");
    var webtext = $("#website-textarea");
    var ipwebtext = $("#ip-web-textarea");

    $("input[type=radio][name='ticket']").change(function() {
        var oldchoice = "";
        var newchoice = $("input[type=radio][name='ticket']:checked").val();
        switch(newchoice) {
            case "email":
                if (webtext.val() == "" && ipwebtext.val() == "") {
                    $("#email_investigate_info").show();
                    $("#web_investigate_info").hide();
                    $("#email_web_investigate_info").hide();
                } else {
                    if(webtext.val() != "")
                        oldchoice = "web";
                    else if(ipwebtext.val() != "")
                        oldchoice = "email_web";
                }
                if (webtext.val() != "" || ipwebtext.val() != "") {
                    $('#ticket-modal').modal();
                    // If user selects change ticket the below happens
                    $("#change-ticket-button").click(function () {
                        adjustRequired(iptext, webtext, ipwebtext, null);
                        oldchoice = "";
                        $("#ticket_email").prop("checked", true);
                        // All the actions that should happen if the user chooses to change tickets
                        webtext.val("");
                        $("#web-display_count").html("0");
                        ipwebtext.val("");
                        $("#ip-web-display_count").html("0");
                        $("#email_investigate_info").show();
                        $("#web_investigate_info").hide();
                        $("#email_web_investigate_info").hide();
                    });
                    $('#ticket-modal').on('hide.bs.modal', function (e) {
                        if(oldchoice != "")
                            $("#ticket_"+oldchoice).prop("checked", true);
                    })
                } else {
                    adjustRequired(iptext, webtext, ipwebtext, null);
                }
                break;

            case "web":
                if (iptext.val() == "" && ipwebtext.val() == "") {
                    $("#email_investigate_info").hide();
                    $("#email_web_investigate_info").hide();
                    $("#web_investigate_info").show();
                } else {
                    if(iptext.val() != "")
                        oldchoice = "email";
                    else if(ipwebtext.val() != "")
                        oldchoice = "email_web";
                }

                if (iptext.val() != "" || ipwebtext.val() != "") {
                    $('#ticket-modal').modal();

                    // If user selects change ticket the below happens
                    $("#change-ticket-button").click(function () {
                        adjustRequired(webtext, iptext, ipwebtext, null);
                        oldchoice = "";
                        $("#ticket_web").prop("checked", true);

                        iptext.val("");
                        $("#ip-display_count").html("0");
                        ipwebtext.val("");
                        $("#ip-web-display_count").html("0");
                        $("#email_investigate_info").hide();
                        $("#email_web_investigate_info").hide();
                        $("#web_investigate_info").show();
                    });
                    $('#ticket-modal').on('hide.bs.modal', function (e) {
                        if(oldchoice != "")
                            $("#ticket_"+oldchoice).prop("checked", true);
                    })
                } else {
                    adjustRequired(webtext, iptext, ipwebtext, null);
                }
                break;

            case "email_web":
                if (iptext.val() == "" && webtext.val() == "") {
                    $("#email_web_investigate_info").show();
                    $("#email_investigate_info").hide();
                    $("#web_investigate_info").hide();
                } else {
                    if(iptext.val() != "")
                        oldchoice = "email";
                    else if(webtext.val() != "")
                        oldchoice = "web";
                }

                $("#keep-ticket-button").click(function (){
                    var do_this = "something";
                });
                if (iptext.val() != "" || webtext.val() != "") {
                    $('#ticket-modal').modal();
                    // If user selects change ticket the below happens
                    $("#change-ticket-button").click(function () {
                        adjustRequired(ipwebtext, webtext, iptext, null);
                        oldchoice = "";
                        $("#ticket_email_web").prop("checked", true);

                        iptext.val("");
                        $("#ip-display_count").html("0");
                        webtext.val("");
                        $("#web-display_count").html("0");
                        $("#email_web_investigate_info").show();
                        $("#email_investigate_info").hide();
                        $("#web_investigate_info").hide();
                    });
                    $('#ticket-modal').on('hide.bs.modal', function (e) {
                        if(oldchoice != "")
                            $("#ticket_"+oldchoice).prop("checked", true);
                    })
                } else {
                    adjustRequired(ipwebtext, webtext, iptext, null);
                }
                break;

            default: // assume "other"
                if (iptext.val() == "" && webtext.val() == "" && ipwebtext.val() == "") {
                    $("#email_investigate_info").hide();
                    $("#web_investigate_info").hide();
                    $("#email_web_investigate_info").hide();
                } else {
                    if(iptext.val() != "")
                        oldchoice = "email";
                    else if(webtext.val() != "")
                        oldchoice = "web";
                    else if(ipwebtext.val() != "")
                        oldchoice = "email_web";
                }

                $("#keep-ticket-button").click(function (){
                    var do_this = "something";
                });
                if (iptext.val() != "" || webtext.val() != "" || ipwebtext.val() != "") {
                    $('#ticket-modal').modal();
                    $("#change-ticket-button").click(function () {
                        adjustRequired(null, webtext, iptext, ipwebtext);
                        oldchoice = "";
                        $("#ticket_other").prop("checked", true);

                        iptext.val("");
                        $("#ip-display_count").html("0");
                        webtext.val("");
                        $("#web-display_count").html("0");
                        ipwebtext.val("");
                        $("#ip-web-display_count").html("0");
                        $("#email_investigate_info").hide();
                        $("#web_investigate_info").hide();
                        $("#email_web_investigate_info").hide();
                    });
                    $('#ticket-modal').on('hide.bs.modal', function (e) {
                        if(oldchoice != "")
                            $("#ticket_"+oldchoice).prop("checked", true);
                    })
                } else {
                    adjustRequired(null, webtext, iptext, ipwebtext);
                }
                break;
        }

    });

});