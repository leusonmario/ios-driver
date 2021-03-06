/*
 * Copyright 2012 ios-driver committers.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

$(document).ready(function () {
    $(".ui-layout-south").tabs();
    $("#record").button({ icons: { primary: "ui-icon-gear" } });
    $("#record").click(function () {
        var recorderOn = $(this).prop('checked');
        console.log("recorder on: " + recorderOn);
        inspector.recorder.active(recorderOn);
    });

    /*var i = 0;
     $("#record").click(function () {
     i++;
     $("#record_text").html("clicked " + i);
     });*/

    var expandCenter = function () {
        var h = $(window).height() - $("#header").height() - $("#footer").height();
        $("#content").height(h);
    }

    expandCenter();

    var layout = $('#content').layout({
                                          center__size: .50,
                                          center__childOptions: {}
                                      });

    var southH = 200;
    layout.sizePane("south", southH);

    var topLayout = layout.center.children.layout1;
    topLayout.sizePane("west", 450);
    topLayout.sizePane("east", 300);

    topLayout.west.options.onresize_end = function () {
        var w = $("#device").width();
        console.log("resized to " + w);
        resize();
    }

    $(window).resize(function () {
        expandCenter();
    });

    resize();

});


