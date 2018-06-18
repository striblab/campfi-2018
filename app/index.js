/**
 * Main JS file for project.
 */

// Define globals that are added through the config.json file, here like this:
// /* global _ */
'use strict';

// Dependencies
import utilsFn from './utils.js';

// Import local ES6 modules like this:
//import utilsFn from './utils.js';

// Or import libraries installed with npm like this:
// import module from 'module';

// Setup utils function
utilsFn({ });

//slidedown extras in list
$(document).ready(function(){
    $(".moreRaised").click(function(){
        $(this).parent().parent().find('.nest').slideDown(500,function(){
	    	$(".moreRaised").hide();
	    	$(".fewerRaised").show();
        	});
    });

    $(".fewerRaised").click(function(){
        $(this).parent().parent().find('.nest').slideUp(500,function(){
        	$(".fewerRaised").hide();
        	$(".moreRaised").show();
        	});
    });

    $(".moreSpent").click(function(){
         $(this).parent().parent().find('.nest').slideDown(300,function(){
            $(".moreSpent").hide();
            $(".fewerSpent").show();
            });
    });

    $(".fewerSpent").click(function(){
        $(this).parent().parent().find('.nest').slideUp(500,function(){
            $(".fewerSpent").hide();
            $(".moreSpent").show();
            });
    });

    $(".moreCash").click(function(){
         $(this).parent().parent().find('.nest').slideDown(300,function(){
	    	$(".moreCash").hide();
	    	$(".fewerCash").show();
        	});
    });

    $(".fewerCash").click(function(){
        $(this).parent().parent().find('.nest').slideUp(500,function(){
        	$(".fewerCash").hide();
        	$(".moreCash").show();
        	});
    });

});
