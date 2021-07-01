function delete_color(ele) {
    var text = $(ele).parent()[0]["innerText"]
    color_name = text.trim();
    location.replace("change.php?delete=color&color_name="+color_name);
}

function delete_texture(ele) {
    var texture_type = $(ele).parent()[0].parentElement.offsetParent.className;
    var texture_name = $(ele).parent().filter('img').prevObject[0].children[0].src;
    texture_name = texture_name.split('/');
    texture_name = texture_name[texture_name.length - 1]
    if (texture_type.includes("interior_div")) {
        location.replace("change.php?delete=texture&texture_type=interior&texture_name=" + texture_name)
    } else if (texture_type.includes("exterior_div")) {
        location.replace("change.php?delete=texture&texture_type=exterior&texture_name=" + texture_name)
    } else {
        alert("Some Unknown Error Occured.");
    }
}

function open_it(ele, div_to_show) {
    $('form').hide();
    $('.box_con').hide();
    $('.opt-btn').removeClass('ac');
    $(ele).addClass('ac');
    if (div_to_show.includes("price")) {
        $(div_to_show).addClass('animate__animated animate__fadeInUp').show();
    } else {
        $('.box_con').hide();
        $(div_to_show).show();
    }
}

function set_color_divs(data) {
    for (var i = 0; i < data.length; i++) {
        var d = (data[i]['hex_code']);
        $('.color_div').append('<div class="col-md-2"><div class="box"><i onclick="delete_color(this);" class="fas fa-times"></i><br><p>' + data[i]['name'] + '</p></div></div>');
    }
}

function set_texture_divs(classname, data) {
    for (var i = 0; i < data.length; i++) {
        var d = data[i]['img_name'];
        $(classname).append('<div class="col-md-2"><div class="box"><img class="text-center mx-auto imgs" src="tex/' + d + '" alt=""><i onclick="delete_texture(this);" class="fas fa-times"></i></div>');
    }
}

function setup_json() {
    $.getJSON("json/main.json", function (data) {
        set_color_divs(data.color);
        set_texture_divs('.interior_div', data.interior);
        set_texture_divs('.exterior_div', data.exterior);
        $('.price_field').attr("placeholder", "Recent Price : $" + data.price);
    }).fail(function () {
        console.log("An error has occurred.");
    });
}
$(document).ready(function () {
    $('.main_con').show();
    setup_json();
});