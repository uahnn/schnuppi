/**
 * Created by Robin on 14.04.15.
 */
$(document).ready(function()
{
    $("#image-1").hover(
        function () {
            $("#image-description").fadeOut("slow", function () {
                $("#image-description").html("<p>Dies ist Bild 1.<br>Dies ist die 2. Zeile</p>").fadeIn("slow")
            });
        }
    );

    $("#image-2").hover(
        function () {
            $("#image-description").fadeOut("slow", function () {
                $("#image-description").html("<p>Dies ist Bild 2.<br>Dies ist die 2. Zeile</p>").fadeIn("slow")
            });
        }
    );
});