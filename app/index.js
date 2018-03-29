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
    $("#moreRaised").click(function(){
        $(".raisedTable .nest").slideDown(1500,function(){
	    	$("#moreRaised").hide();
	    	$("#fewerRaised").show();
        	});
    });

    $("#fewerRaised").click(function(){
        $(".raisedTable .nest").slideUp(500,function(){
        	$("#fewerRaised").hide();
        	$("#moreRaised").show();
        	});
    });

    $("#moreCash").click(function(){
        $(".cashTable .nest").slideDown(1500,function(){
	    	$("#moreCash").hide();
	    	$("#fewerCash").show();
        	});
    });

    $("#fewerCash").click(function(){
        $(".cashTable .nest").slideUp(500,function(){
        	$("#fewerCash").hide();
        	$("#moreCash").show();
        	});
    });

});
