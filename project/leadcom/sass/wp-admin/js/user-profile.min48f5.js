!function(o){var a,t,n,i,r,l,d,p,c,u=!1;function h(){"function"==typeof zxcvbn?(t.val()?v():(t.val(t.data("pw")),t.trigger("pwupdate")),w(),1!==parseInt(l.data("start-masked"),10)?t.attr("type","text"):l.trigger("click"),o("#pw-weak-text-label").html(userProfileL10n.warnWeak)):setTimeout(h,50)}function f(e){l.attr({"aria-label":e?userProfileL10n.ariaShow:userProfileL10n.ariaHide}).find(".text").text(e?userProfileL10n.show:userProfileL10n.hide).end().find(".dashicons").removeClass(e?"dashicons-hidden":"dashicons-visibility").addClass(e?"dashicons-visibility":"dashicons-hidden")}function m(){var e,s;a=o(".user-pass1-wrap, .user-pass-wrap"),o(".user-pass2-wrap").hide(),p=o("#submit, #wp-submit").on("click",function(){u=!1}),d=p.add(" #createusersub"),i=o(".pw-weak"),(r=i.find(".pw-checkbox")).change(function(){d.prop("disabled",!r.prop("checked"))}),(t=o("#pass1")).length?(c=t.val(),1===parseInt(t.data("reveal"),10)&&h(),t.on("input pwupdate",function(){t.val()!==c&&(c=t.val(),t.removeClass("short bad good strong"),w())})):t=o("#user_pass"),n=o("#pass2").on("input",function(){0<n.val().length&&(t.val(n.val()),n.val(""),c="",t.trigger("pwupdate"))}),t.is(":hidden")&&(t.prop("disabled",!0),n.prop("disabled",!0)),e=a.find(".wp-pwd"),s=a.find("button.wp-generate-pw"),(l=a.find(".wp-hide-pw")).show().on("click",function(){"password"===t.attr("type")?(t.attr("type","text"),f(!1)):(t.attr("type","password"),f(!0)),t.focus(),_.isUndefined(t[0].setSelectionRange)||t[0].setSelectionRange(0,100)}),s.length&&e.hide(),s.show(),s.on("click",function(){u=!0,s.hide(),e.show(),t.attr("disabled",!1),n.attr("disabled",!1),0===t.val().length&&h()}),a.find("button.wp-cancel-pw").on("click",function(){u=!1,t.val(""),wp.ajax.post("generate-password").done(function(e){t.data("pw",e)}),s.show().focus(),e.hide(),i.hide(0,function(){r.removeProp("checked")}),t.prop("disabled",!0),n.prop("disabled",!0),f(!1),a.closest("form").is("#your-profile")&&(t.val("").trigger("pwupdate"),d.prop("disabled",!1))}),a.closest("form").on("submit",function(){u=!1,t.prop("disabled",!1),n.prop("disabled",!1),n.val(t.val())})}function v(){var e=o("#pass1").val();if(o("#pass-strength-result").removeClass("short bad good strong empty"),e)switch(wp.passwordStrength.meter(e,wp.passwordStrength.userInputBlacklist(),e)){case-1:o("#pass-strength-result").addClass("bad").html(pwsL10n.unknown);break;case 2:o("#pass-strength-result").addClass("bad").html(pwsL10n.bad);break;case 3:o("#pass-strength-result").addClass("good").html(pwsL10n.good);break;case 4:o("#pass-strength-result").addClass("strong").html(pwsL10n.strong);break;case 5:o("#pass-strength-result").addClass("short").html(pwsL10n.mismatch);break;default:o("#pass-strength-result").addClass("short").html(pwsL10n.short)}else o("#pass-strength-result").addClass("empty").html("&nbsp;")}function w(){var e=o("#pass-strength-result")[0];e.className&&(t.addClass(e.className),o(e).is(".short, .bad")?(r.prop("checked")||d.prop("disabled",!0),i.show()):(o(e).is(".empty")?(d.prop("disabled",!0),r.prop("checked",!1)):d.prop("disabled",!1),i.hide()))}o(document).ready(function(){var e,a,t,n,i=o("#display_name"),s=i.val(),r=o("#wp-admin-bar-my-account").find(".display-name");o("#pass1").val("").on("input pwupdate",v),o("#pass-strength-result").show(),o(".color-palette").click(function(){o(this).siblings('input[name="admin_color"]').prop("checked",!0)}),i.length&&(o("#first_name, #last_name, #nickname").bind("blur.user_profile",function(){var t=[],n={display_nickname:o("#nickname").val()||"",display_username:o("#user_login").val()||"",display_firstname:o("#first_name").val()||"",display_lastname:o("#last_name").val()||""};n.display_firstname&&n.display_lastname&&(n.display_firstlast=n.display_firstname+" "+n.display_lastname,n.display_lastfirst=n.display_lastname+" "+n.display_firstname),o.each(o("option",i),function(e,s){t.push(s.value)}),o.each(n,function(e,s){if(s){var a=s.replace(/<\/?[a-z][^>]*>/gi,"");n[e].length&&-1===o.inArray(a,t)&&(t.push(a),o("<option />",{text:a}).appendTo(i))}})}),i.on("change",function(){if(t===n){var e=o.trim(this.value)||s;r.text(e)}})),e=o("#color-picker"),a=o("#colors-css"),t=o("input#user_id").val(),n=o('input[name="checkuser_id"]').val(),e.on("click.colorpicker",".color-option",function(){var e,s=o(this);if(!s.hasClass("selected")&&(s.siblings(".selected").removeClass("selected"),s.addClass("selected").find('input[type="radio"]').prop("checked",!0),t===n)){if(0===a.length&&(a=o('<link rel="stylesheet" />').appendTo("head")),a.attr("href",s.children(".css_url").val()),"undefined"!=typeof wp&&wp.svgPainter){try{e=o.parseJSON(s.children(".icon_colors").val())}catch(e){}e&&(wp.svgPainter.setColors(e),wp.svgPainter.paint())}o.post(ajaxurl,{action:"save-user-color-scheme",color_scheme:s.children('input[name="admin_color"]').val(),nonce:o("#color-nonce").val()}).done(function(e){e.success&&o("body").removeClass(e.data.previousScheme).addClass(e.data.currentScheme)})}}),m()}),o("#destroy-sessions").on("click",function(e){var s=o(this);wp.ajax.post("destroy-sessions",{nonce:o("#_wpnonce").val(),user_id:o("#user_id").val()}).done(function(e){s.prop("disabled",!0),s.siblings(".notice").remove(),s.before('<div class="notice notice-success inline"><p>'+e.message+"</p></div>")}).fail(function(e){s.siblings(".notice").remove(),s.before('<div class="notice notice-error inline"><p>'+e.message+"</p></div>")}),e.preventDefault()}),window.generatePassword=h,o(window).on("beforeunload",function(){if(!0===u)return userProfileL10n.warn})}(jQuery);