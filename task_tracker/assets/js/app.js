// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"
import jQuery from 'jquery';
window.jQuery = window.$ = jQuery; // Bootstrap requires a global "$" object.
import "bootstrap";
import _ from "lodash";


// create Start Time and End Time, my birthday hehe me wishing everything would work rip
var startTime = "~N[1997-03-07 11:11:11]";
var endTime = "~N[1997-03-07 11:11:11]";

window.deleteTimeBlock = (aButton) => {
    let time_block_id = $(aButton)
    .data('time-block-id');
        $.ajax("/ajax/timeblocks/" + time_block_id, {
            method: "delete",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            }).done(() => {
                location.reload();
            });}
            
            $(function () {

    // Start the time of the task and disable the start button
    $('#start-time-button').click((ev) => {
        ev.preventDefault();
        let task_id = $(ev.target).data('task-id');
        startTime = new Date();
        $('#start-time-button').hide();
    });

  
      // End the time of the task, disable the end button and enable start button
      $('#end-time-button').click((ev) => {
        ev.preventDefault();
        let task_id = $(ev.target).data('task-id');

        endTime = new Date();

        $("end-time-button").hide();
        $("start-time-button").show();
        let text = JSON.stringify({
        time_block: {
        start_time: startTime,
        end_time: endTime,
        task_id: task_id,
        }
    });


        $.ajax("/ajax/timeblocks/", {
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: text,
        }).done(() => {
            this.location.reload();
        });

    });

  

    // Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

});


