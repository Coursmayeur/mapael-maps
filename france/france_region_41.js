/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and Mapael
*
* Map of Lorraine for Mapael
* Equirectangular projection
* 
* @author CCM Benchmark Group
* @source http://fr.m.wikipedia.org/wiki/Fichier:France_location_map-Departements.svg
*/
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.fn.mapael);
    }
}(function ($, Mapael) {

	"use strict";

	$.extend(true, $.fn.mapael, 
		{
			maps :  {
				france_region_41 : {
					width : 125.6265,
					height : 119.09375,
					getCoords : function (lat, lon) {
						var xfactor = 45.48385;
						var xoffset = -223.31495;
						var x = (lon * xfactor) + xoffset;
						
						var yfactor = -65.97284;
						var yoffset = 3273.7064;
						var y = (lat * yfactor) + yoffset;
						return {x : x, y : y};
					},
					elems : {
					    "department-55" : "m 23.07,0.11 c -0.77,0.32 -0.55,1.73 -1.61,1.67 -1.21,-0.14 -1.89,0.97 -2.3,1.93 -0.54,0.51 -1.27,0.8 -1.92,1.16 -0.67,0.35 -0.71,-0.71 -1.19,-0.93 -0.57,-0.57 -1.36,-1.09 -2.15,-0.7 -0.63,-0.05 -1.61,0.66 -1.87,-0.29 -0.19,-0.82 -1.39,-1.74 -2.02,-0.83 -0.33,0.63 0.62,1.75 -0.38,1.97 -0.63,0.2 -0.63,0.98 -0.28,1.39 -0.2,0.91 -0.82,1.8 -1.72,2.07 0.3,0.7 1.35,1.16 1.17,2.05 0.24,0.67 1.65,0.72 0.98,1.65 -0.36,0.69 0.22,1.27 0.36,1.87 -0.37,0.55 -1.86,0.73 -0.83,1.46 0.8,0.77 -0.18,2.01 -1.15,1.79 -0.83,-0.11 -0.68,0.91 -1.19,1.3 -0.49,0.49 -1.01,1.2 -0.48,1.86 0.24,0.53 -0.22,1.26 0.46,1.63 0.4,0.03 0.88,0.43 0.44,0.8 -0.09,0.41 -0.07,1 -0.7,0.9 -1.28,-0.2 -1.95,1.06 -3.01,1.46 -0.43,0.21 -0.55,0.85 -0.03,0.97 0.09,0.68 0.72,1.12 0.87,1.73 -0.38,0.82 -1.99,0.69 -1.96,1.7 0.65,2.42 2.43,4.48 2.45,7.07 0.32,0.81 0.11,1.63 -0.49,2.27 -0.4,0.33 -0.1,0.98 0.38,0.6 0.56,-0.32 1.4,0.15 1.65,0.68 -0.03,0.59 0.13,1.52 -0.43,1.86 -0.44,-0.08 -1.31,0.55 -0.59,0.82 0.6,-0.03 1.47,0.46 1.03,1.16 -0.21,0.71 -0.7,1.34 -1.25,1.81 -0.87,0.22 -1.7,0.73 -2.62,0.62 -0.69,0.33 -1,1.16 -1.47,1.74 -0.05,0.45 0.45,0.81 0.06,1.28 -0.62,1 0.75,1.67 0.7,2.59 -0.5,0.74 -1.99,0.94 -1.96,2 0.1,0.54 0.25,1.17 0.94,1.21 0.77,0 1.26,0.47 1.52,1.13 0.71,0.96 1.61,1.94 2.7,2.39 0.17,0.71 0.28,1.55 0.41,2.2 -0.39,0.25 -0.37,0.88 -0.86,1.11 -0.29,0.56 0.86,0.53 0.62,1.21 0.02,0.6 -0.82,0.91 -0.5,1.59 0.32,0.72 -0.19,1.94 0.58,2.4 0.99,0.16 1.33,-1.02 2,-1.41 0.46,0.72 0.17,2.12 1.12,2.49 0.55,0.19 1.38,-0.13 1.82,0.16 0.27,0.91 0.92,2.15 2.07,1.9 0.44,0.42 1.06,0.85 1.54,1.28 0.27,0.91 1.28,1.02 2.05,1.26 0.88,0.43 1.95,1.18 2.91,0.73 0.98,0.17 1.35,1.03 1.85,1.76 0.55,0.82 1.55,1.01 2.44,1.15 0.57,0.54 0.12,1.59 0.9,2.06 0.39,0.4 1.05,0.3 1.26,0.89 0.4,0.31 1.01,-0.12 1.35,0.4 0.42,0.24 1.43,0.92 1.55,0.05 0.05,-1.03 1.35,-0.93 2.06,-1.32 0.49,-0.18 0.91,0.39 1.4,-0.06 0.82,-0.09 1.63,-0.26 2.3,-0.79 0.86,0 0.2,-0.79 0.24,-1.18 1.29,-0.53 2.44,0.67 3.7,0.5 0.98,-0.38 1.28,-1.55 1.8,-2.37 0.04,-0.89 -0.09,-1.81 0.32,-2.64 -0.26,-0.89 -1.57,-0.57 -2.13,-1.19 -0.84,-0.75 -0.59,-2.48 0.64,-2.65 0.68,-0.5 1.4,-0.96 2.29,-0.88 0.71,0.03 0.77,-1.3 -0.05,-0.96 -0.39,0.09 -1.34,0.82 -1.19,-0.09 -0.32,-1.03 -0.91,-2.05 -0.55,-3.17 0.23,-0.9 0.84,-2.01 -0.08,-2.75 -0.52,-0.58 -1.47,-1.26 -1.23,-2.13 0.67,-0.21 0.97,-0.77 0.85,-1.42 0.36,-0.66 1.4,-1.17 0.97,-2.02 1.28,-1.23 0.86,-3.22 0.29,-4.68 0.05,-0.57 1.47,-0.42 0.86,-1.17 -0.74,-0.43 -1.33,-1.3 -1.55,-2.09 0.84,-0.27 1.57,-0.79 2.09,-1.54 0.55,-0.4 1.4,0.2 1.91,-0.43 0.94,-0.59 -0.13,-1.64 -0.81,-1.89 -0.41,-0.09 -1.05,-0.58 -0.54,-0.98 0.67,-0.5 0.2,-1.44 0.8,-2.02 0.14,-0.76 1.67,-0.99 0.82,-1.78 -0.28,-0.7 -1.02,-0.92 -1.68,-0.99 -0.04,-0.95 1.28,-2.09 0.25,-2.93 -0.65,-0.24 -1.31,0.12 -1.9,0.21 -0.76,-0.24 -1.3,-1.12 -0.75,-1.84 0.47,-0.87 -0.69,-1.56 -0.17,-2.42 0.02,-0.6 0.82,-1.3 0.43,-1.83 -0.54,-0.11 -1.59,0.65 -1.65,-0.3 -0.23,-0.67 -0.13,-1.42 0.53,-1.81 0,-0.56 -0.93,-0.99 -0.5,-1.63 0.06,-0.55 0.02,-1.23 0.73,-1.35 0.9,-0.19 1.61,-1.47 0.96,-2.21 -0.5,-0.27 -1.34,0.19 -1.56,-0.58 -0.28,-0.47 -0.43,-1.04 0.19,-1.3 0.51,-0.64 0.08,-1.59 -0.68,-1.72 -0.34,-0.64 -0.31,-1.61 -1.15,-1.87 -0.07,-0.57 0.24,-1.37 -0.5,-1.67 -0.79,-0.42 -1.75,-1.47 -2.71,-1.02 -0.21,0.27 -0.06,0.74 -0.57,0.7 -1.13,0.14 -2.35,0.03 -3.3,0.74 -0.58,0.25 -1.64,-0.06 -1.72,0.86 -0.02,0.45 -0.93,1.26 -1.06,0.5 -0.07,-0.69 -1.16,-0.41 -1.25,-1.02 0.5,-0.33 1.11,-0.28 1.63,-0.14 0.47,-0.15 1.45,-0.92 0.45,-0.99 -0.42,-0.04 -1.36,-0.38 -0.76,-0.85 0.25,-0.39 -0,-0.96 -0.44,-0.97 -0.26,-0.75 0.41,-2.27 -0.79,-2.2 -0.37,-0.09 -1.33,0 -0.8,-0.58 0.22,-0.58 0.6,-1.02 1.01,-0.31 0.56,0.86 1.5,1.07 0.93,-0.15 -0.16,-0.63 -0.8,-1.23 -0.16,-1.83 0.47,-0.91 -0.81,-1.48 -0.68,-2.38 -0.39,-0.69 -0.71,-1.4 -0.96,-2.14 -0.45,-0.56 -0.99,-1.31 -1.75,-1.4 z",
					    "department-54" : "m 39.86,4.21 c -0.75,0.35 -1.03,1.69 -2.07,1.26 -1.09,-0.31 -2.17,-1.32 -3.37,-0.68 -0.85,0.39 -0.71,1.55 -1.19,2.17 -0.79,-0.06 -1.32,-0.97 -2.18,-0.98 -1.2,-0.47 -1.4,1.31 -2.49,1.26 -0.56,0.2 -1.52,-0.02 -1.86,0.55 0.44,0.27 0.27,0.87 -0.12,1.17 -0.51,0.74 -0.34,2 0.53,2.33 -0.21,0.52 -0.36,1.46 0.47,1.48 0.76,-0.04 0.01,1.16 0.84,1.09 1.11,-0.02 1.89,-1.06 3.05,-0.94 0.84,0.11 1.52,-0.34 2.07,-0.88 0.97,-0.2 1.8,0.79 2.59,1.2 0.88,0.38 0.03,1.62 0.96,1.93 0.52,0.51 0.41,1.6 1.28,1.72 0.55,0.59 0.51,1.61 -0.2,2.05 -0.26,0.67 0.39,1.54 1.14,1.17 0.82,-0.4 0.76,0.77 0.7,1.26 0.03,0.96 -0.9,1.23 -1.55,1.65 -0.65,0.77 -0.2,1.83 0.26,2.55 -0.46,0.52 -0.91,1.18 -0.5,1.89 0.31,0.8 1.63,-0.54 1.67,0.41 -0.02,0.87 -1.04,1.84 -0.5,2.67 0.32,0.3 0.39,0.93 0.7,1.13 -0.62,0.36 -1.18,1.26 -0.39,1.78 0.46,0.53 0.93,-0.19 1.49,-0.03 0.58,-0.08 1.42,-0.02 1.33,0.77 0.23,0.69 -0.25,1.11 -0.52,1.65 -0.28,0.96 1.33,0.3 1.31,1.17 0.21,0.64 1.09,1.2 0.12,1.61 -0.62,0.52 -1.1,1.26 -1.01,2.07 -0.11,0.39 -1.05,1.25 -0.2,1.4 0.69,0.23 1.39,0.89 1.59,1.6 -0.35,0.95 -1.55,0.92 -2.37,1.1 -0.62,0.49 -1.05,1.33 -1.97,1.31 -0.17,0.75 0.75,1.56 1.35,2.09 0.44,0.42 0.01,0.97 -0.49,1.01 -0.74,0.46 0.21,1.02 0.18,1.59 0.31,1.02 -0.03,2.1 -0.37,3.01 0.17,0.26 0.68,0.44 0.3,0.83 -0.77,0.51 -1.84,1.19 -1.61,2.28 -0.04,0.54 -0.67,0.47 -0.85,0.83 -0.14,1.34 1.71,1.8 1.8,3.01 -0.68,1.52 -0.92,3.67 0.4,4.91 0.43,0.1 1.46,-0.52 1.46,0.22 0.03,0.81 -0.77,1.15 -1.47,1.01 -0.84,0.05 -1.33,0.82 -2.11,1.03 -0.65,0.75 -0.5,2.26 0.64,2.45 0.5,0.35 1.5,0.41 1.75,1 -0.84,0.81 -0.59,2.13 -0.19,3.09 0.72,0.79 1.52,-0.52 2.35,-0.4 0.69,-0.39 1.71,-1.01 2.31,-0.21 0.36,0.4 1.15,0.2 1.41,0.57 0.13,0.92 -0.97,1.52 -0.54,2.44 0.32,2.07 0.21,0.72 0.76,2.09 -0.33,0.24 0.03,0.35 0.21,0.88 0.1,0.61 0.77,1.1 1.28,0.7 0.59,0.19 0.69,0.89 0.49,1.41 -0.03,0.73 0.2,2.11 1.24,1.72 1.3,-0.55 2.81,-0.92 4.18,-0.53 0.52,-0.32 -0.3,-1.24 0.5,-1.44 0.62,-0.35 0.63,0.81 0.8,1.14 0.01,0.6 0.87,0.93 0.98,0.2 0.25,-0.37 0.92,-0.28 1.02,-0.84 0.3,-0.68 0.25,-1.44 0.25,-2.17 0.41,0.12 1.27,-0.27 1.54,0.1 0.13,0.91 1.44,0.26 2.01,0.29 0.91,-0.05 1.74,-0.57 1.96,-1.47 0.39,-0.22 0.87,-0.46 1.31,-0.58 0.58,0.36 0.37,1.39 1.16,1.62 0.8,0.59 1.68,0.03 2.46,-0.2 0.52,0.11 0.66,0.54 0.68,0.96 0.51,0.31 1.14,0.16 1.31,-0.46 0.6,-0.71 1.64,-0.95 2.48,-0.6 0.35,-0.17 0.68,-0.28 1.07,-0.25 0.88,-0.16 1.51,-1.52 2.39,-0.66 0.26,0.19 1.32,0.7 1.14,-0.02 -0.64,-1.01 0.35,-2.32 1.29,-2.65 0.46,-0.19 1.23,-0.67 1.56,-0.01 0.24,0.94 0.11,2.45 1.31,2.75 0.6,-0.07 0.92,0.52 1.42,0.66 0.74,-0.36 1.63,-0.22 2.3,0.2 0.75,-0.12 0.96,0.89 1.75,0.72 0.58,0 1.4,0.42 1.66,-0.36 0.32,-0.88 1.31,-1.15 1.86,-1.87 0.46,0.21 0.24,1.23 1.01,1.07 1.3,-0.45 2.07,-1.81 3.06,-2.7 0.68,-1.07 1.9,-1.36 3,-1.76 0.87,-0.64 2.05,-0.66 2.85,-1.46 -0.11,-0.54 -0.75,-0.98 -0.41,-1.65 0.04,-0.31 -0.78,-0.26 -0.33,-0.49 0.36,-0.55 -0.74,-0.83 -0.81,-1.37 -0.22,-0.65 -0.67,-1.14 -1.32,-1.32 -0.39,-0.25 -1.31,-0.74 -0.55,-1.15 1.2,-0.93 -0.82,-0.59 -1.44,-0.63 -0.76,0.11 -1.55,-0.25 -1.67,-1.07 -0.05,-0.52 -0.68,-0.57 -0.78,-0.05 -0.42,0.57 -1.43,0.13 -2.05,0.31 -0.64,0.05 -1.45,0.08 -1.53,-0.77 -0.42,-1.23 -1.87,-0.51 -2.77,-0.74 -0.6,-0.29 -0.84,-0.95 -1.21,-1.39 -1.06,-0.09 -2.17,-0.1 -3.08,-0.77 -0.31,-0.13 -0.9,1.06 -0.89,0.32 0.08,-0.68 0.46,-2.08 -0.63,-2.1 -0.76,0.37 -1.12,-0.5 -1.77,-0.63 -0.5,0.08 -0.88,-0.21 -0.98,-0.68 -0.59,-0.69 -1.07,-1.86 -2.07,-1.94 -0.57,0.08 -1.41,0.36 -1.91,0.13 -0.28,-1.12 -1.78,-0.69 -2.5,-1.19 -0.15,-0.67 -0.91,-1.52 -1.59,-0.89 -0.48,0.36 -1.08,0.72 -1.58,0.2 -0.39,-0.36 -1.24,0.35 -1.2,-0.44 -0.19,-0.88 -0.72,-1.72 -1.31,-2.32 -0.25,-0.13 -1.29,0.25 -1.11,-0.24 0.62,-0.75 -1.12,-1.01 -0.76,-1.72 0.59,-0.21 0.33,-1.04 0.94,-1.25 0.25,-0.56 -1.01,-0.9 -0.09,-1.26 0.76,-0.42 1.23,-1.09 0.27,-1.56 -0.32,-0.46 -1.16,0.05 -1.23,-0.62 -0.31,-0.69 -1.16,-0.77 -1.67,-0.24 -0.85,0.35 -1.24,-1.05 -2.15,-0.73 -0.66,0.23 -1.25,-0.07 -1.8,-0.36 -0.5,0.09 -0.64,0.97 -1.24,0.43 -0.69,-0.21 -0.23,-1.1 -0.69,-1.54 -0.24,-0.8 -1.09,-0.62 -1.64,-0.32 -0.64,-0.09 -0.41,-1.21 -1.16,-0.97 -0.54,0.26 -1.42,-0.38 -0.84,-0.88 0.24,-0.64 0.21,-1.53 -0.56,-1.75 -0.63,-0.84 -1.51,-1.54 -2.59,-1.65 -0.86,-0.34 -0.97,-1.37 -1.66,-1.88 0.09,-0.51 -0.12,-0.97 -0.41,-1.38 0.01,-0.59 0.1,-1.41 0.93,-1.12 0.76,-0.16 1.88,0.22 2.44,-0.38 -0.36,-0.8 -1.25,-2.05 -0.19,-2.71 0.64,0.16 1.63,-0.64 0.89,-1.18 -0.35,-0.55 -1.04,-0.52 -1.49,-0.85 -0.39,-0.48 -0,-1.23 0.3,-1.58 0.67,0.15 0.67,-0.86 1.26,-1.02 0.88,-0.59 0.56,-1.76 -0.29,-2.14 -0.13,-0.37 -0.07,-0.88 -0.41,-1.11 -0.15,-0.76 0.34,-1.69 -0.09,-2.34 -0.33,0.02 -0.63,0.43 -0.93,-0.02 -0.55,-0.58 -1.54,-1.11 -1.67,-1.94 0.42,-0.24 1.21,-0.5 0.67,-1.11 -0.41,-0.42 -1.3,-0.45 -1.41,-1.16 0.48,-0.68 0.21,-1.78 -0.55,-2.08 -0.15,-0.92 1.07,-1.35 0.94,-2.2 -0.46,-0.5 0.23,-0.94 0.05,-1.5 -0.02,-0.75 -0.06,-1.85 -1.13,-1.37 -0.44,0.16 -0.76,-0.01 -0.77,-0.49 -0.53,-0.85 -2.01,-0.12 -2.26,-1.24 -0.39,-0.75 -0.71,-1.63 -1.58,-1.9 -0.64,-0.45 -1.4,-0.74 -2.08,-1.09 l -0.05,0.01 z",
					    "department-57" : "m 60.01,7.6 c -1.01,0.02 -2.09,0.09 -2.78,0.9 -0.59,0.09 -1.06,0.48 -1.19,1.1 -0.18,0.59 -1.01,0.45 -1.01,1.15 -0.64,0.34 -1.41,-0.76 -2.01,-0.03 -0.83,0.92 -2.25,0.5 -3.26,0.19 -0.75,-0.49 -0.18,-1.68 -1.01,-2.19 -0.69,-0.63 -1.91,-0.91 -2.74,-0.44 -0.03,0.84 1.1,0.21 1.57,0.57 0.56,0.31 0.01,1.04 0.35,1.52 0.26,0.4 0.05,0.63 -0.2,0.89 -0.11,0.48 0.75,1.19 -0.08,1.32 -0.61,0.35 -1.06,1.33 -0.24,1.72 0.52,0.71 -0.18,2.08 0.71,2.53 0.69,-0.16 0.86,0.89 1.35,1.18 -0.32,0.25 -1.43,-0.04 -1.16,0.74 0.48,0.6 1.12,1.48 1.96,1.49 0.38,-0.48 0.81,0.16 0.67,0.58 -0.04,0.73 -0.21,1.56 0.19,2.18 -0.14,0.92 1.27,1.13 0.92,2.09 -0.21,0.79 -1.08,1.28 -1.33,1.98 -1,-0.17 -1.06,1.74 0.01,1.62 0.45,0.32 1.13,0.76 1.26,1.24 -0.43,0.77 -1.82,0.65 -1.8,1.68 0.36,0.48 0.19,1.25 0.79,1.63 0.02,0.49 -0.93,0.42 -1.27,0.5 -0.68,0.17 -2.13,-0.3 -2.3,0.69 0.05,0.58 0.91,1.02 0.39,1.58 0.12,0.41 0.78,0.4 0.79,0.93 0.33,1.28 2.02,0.94 2.8,1.72 0.28,0.7 1.11,0.93 1.38,1.56 0.17,0.66 -0.6,2.21 0.47,1.97 0.54,-0.25 0.95,-0.05 0.92,0.62 0.42,0.64 1.36,-0.4 1.81,0.31 0.66,0.48 0.33,1.95 1.28,1.96 0.44,-0.39 1.09,-0.68 1.54,-0.18 0.65,0.23 1.65,-0.35 2.13,0.16 0.2,0.88 1.37,0.42 1.9,0.13 0.67,-0.04 1.01,0.6 1.45,0.94 0.39,0.08 0.83,-0.06 0.94,0.45 0.49,0.31 0.69,1.09 0.05,1.35 -0.52,0.12 -0.8,0.64 -0.41,1.02 0.14,0.41 0.12,0.96 -0.37,1.03 -0.07,0.34 -0.06,0.66 -0.36,0.93 -0.07,0.96 1.34,0.59 1.87,0.84 0.09,0.66 -0.01,1.68 0.99,1.54 0.19,0.21 -0.32,0.61 -0.1,0.93 0.22,1.05 1.63,1.25 2.51,1.09 0.58,-0.23 1.14,-0.85 1.62,-0.12 0.45,0.38 0.61,1.18 1.37,1.02 1.06,0.02 1.69,1.3 2.84,0.97 0.51,-0.1 1.17,-0.4 1.42,0.24 0.42,0.76 1.21,1.13 1.5,1.95 0.46,0.4 1.17,0.29 1.61,0.78 0.5,0.29 1.24,-0.12 1.54,0.56 0.42,0.38 -0.03,1.55 0.8,1.33 0.72,0.21 1.35,0.91 2.2,0.77 0.43,0.1 1.45,-0.47 1.23,0.37 0.01,0.58 0.8,0.48 0.83,1.03 0.88,0.29 2.22,-0.42 2.8,0.63 0.15,0.99 0.94,1.07 1.8,0.89 0.82,0.06 1.66,-0.12 2.18,-0.78 0.65,0.45 0.7,1.8 1.78,1.59 0.65,0.11 1.52,-0.27 2.08,0.11 0.34,0.56 -0.85,0.98 -0.18,1.45 0.63,0.44 1.53,0.45 1.7,1.36 0.2,0.88 1.04,1.17 1.63,1.69 0.05,0.93 1.08,0.47 1.62,0.33 0.99,0.59 2.5,0.71 3.3,-0.28 0.11,-0.51 0.56,-0.98 1.1,-0.82 0.94,-0.61 1.57,-1.7 2.1,-2.67 0.13,-0.88 0.73,-1.72 0.7,-2.64 0.2,-0.56 1.43,-1.11 0.84,-1.72 -0.48,-0.2 -1.3,0.13 -1.41,-0.61 -0.14,-0.5 -1.08,-1.16 -0.64,-1.68 1.03,-0.22 0.89,-1.53 1.53,-2.18 0.4,-0.81 0.44,-1.78 1.22,-2.36 -0.15,-0.67 -0.64,-1.32 -0.87,-2 -0.44,-0.64 -1.35,-0.09 -1.7,-0.85 -0.2,-0.52 -0.57,-1.35 -1.26,-1.15 -0.32,0.62 -0.8,-0.32 -1.22,-0.38 -0.5,-0.2 -0.2,-1.54 -0.9,-0.98 -0.35,0.48 -1.82,-0.32 -1.44,0.73 0.2,0.47 0.13,0.99 -0.42,1.12 -0.7,0.18 -0.19,1.26 -0.97,1.22 -0.65,-2e-4 -1.24,0.78 -1.84,0.61 -0.3,-0.31 -0.64,-0.78 -0.01,-0.97 0.93,-0.81 -0.91,-0.45 -1.18,-1.07 0.14,-0.56 -0.11,-1.51 0.3,-1.78 0.55,-0.19 1.69,0.12 1.89,-0.59 -0.33,-0.97 -1.49,-0.07 -2.07,-0.31 -0.66,-1.3 -2.27,-1.8 -3.61,-2.05 -0.75,0.13 -0.79,-0.54 -0.49,-1.02 0.1,-0.73 -1.47,-1.19 -0.76,-1.85 0.37,0.3 1.01,0.73 1.33,0.11 0.5,-0.5 0.25,-2.03 1.27,-1.82 0.45,0.14 1.42,0.3 1.18,-0.45 0.25,-0.53 0.24,-1.16 0.4,-1.73 0.62,-0.58 0.48,-1.43 0.68,-2.16 0.46,-0.78 1.14,-1.56 0.86,-2.54 -0.01,-0.38 0.17,-0.72 0.56,-0.52 0.52,-0.25 1.14,-0.44 1.5,0.19 0.24,0.43 -0.63,0.45 -0.4,0.98 0.16,0.79 0.87,1.34 0.86,2.21 -0.13,1.21 0.96,1.03 1.8,1.01 0.68,-0.1 0.87,0.71 1.47,0.81 0.3,0.57 0.87,0.95 1.47,0.49 0.99,-0.27 1.95,0.5 2.84,0.84 0.34,0.28 -0.31,1.08 0.4,1.11 0.53,-0.02 0.79,0.86 1.42,0.61 0.68,-0.21 1.34,-0.79 2.07,-0.43 1.56,-0.02 3.3,-1.53 4.72,-0.33 0.59,0.78 1.54,0.93 2.36,1.25 0.24,0.55 0.98,0.39 1.05,-0.15 0.46,-0.7 1.34,-1.23 1.37,-2.12 0.31,-0.66 0.13,-1.42 0.76,-1.95 0.32,-0.83 0.64,-1.68 1.3,-2.32 0.84,-0.93 -0.39,-2.22 -1.36,-2.39 -0.84,-0.15 -1.89,0.31 -2.48,-0.57 -0.74,-0.95 -1.39,-2.05 -2.26,-2.89 -0.28,-0.68 0.62,-1.6 -0.37,-2.01 -0.79,-0.6 -2.21,0.45 -2.57,-0.79 -0.59,-0.66 -1.68,-0.11 -2.37,0.13 -0.98,0.4 -0.63,2.14 -1.91,2.03 -1.15,-0.19 -1.44,1.18 -2.27,1.59 -1.07,0.17 -2.03,-1.07 -3.13,-0.4 -0.54,0.38 -1.18,0.51 -1.68,-0.03 -0.49,-0.46 -1.11,0.04 -1.59,-0.08 -0.72,-0.53 -1.67,-0.83 -2.17,-1.58 -0.78,-0.03 -0.51,1.18 -1,1.58 -0.31,0.63 -1.55,1.21 -1.79,0.24 -0.56,-1.3 -0.54,-2.74 -0.76,-4.09 -1.04,-1.1 -2.84,-0.84 -3.82,-2.03 -0.52,-0.68 -1.29,-0.32 -1.85,0.05 -0.84,0.23 -1.94,-0.71 -2.61,0.02 -0.24,1.03 1.09,2.13 0.21,3.08 -0.4,0.94 -1.46,0.82 -2.2,0.41 -0.99,-0.52 -2.21,-0.13 -3.16,-0.61 -0.59,-0.37 -1.05,-1.38 -0.26,-1.79 0.52,-0.6 0.13,-1.83 -0.81,-1.44 -0.78,0.31 -0.81,-0.56 -0.84,-1.1 0.09,-1.01 -1,-1.22 -1.45,-1.89 -0.19,-0.41 0.18,-0.88 -0.31,-1.2 -0.62,-0.96 -1.77,-1.35 -2.43,-2.23 -0.19,-0.83 -1.18,-1.2 -1.33,-1.98 0.04,-0.72 1.48,-0.76 0.97,-1.6 -0.4,-0.93 -1.31,-1.39 -2.11,-1.87 -0.53,-0.65 0.47,-1.7 -0.47,-2.19 -1.38,-0.86 -2.65,-1.98 -4.25,-2.36 -0.5,-0.4 -1.17,-0.78 -1.8,-0.3 -1.41,1.09 -3.37,0.14 -4.66,-0.7 -0.71,-0.74 -1.67,-1.44 -2.62,-1.74 -0.57,0.04 -1.14,0.07 -1.71,0.11 z",
					    "department-88" : "m 100.33,73.4 c -1.01,0.59 -2.15,0.94 -3.15,1.53 -0.56,0.44 -1.46,0.18 -1.96,0.82 -1.46,1.11 -2.46,2.98 -4.13,3.71 -0.55,-0.1 -0.64,-0.63 -0.85,-1.01 -0.86,0.23 -1.43,1.22 -1.96,1.91 -0.2,0.73 -1.26,0.3 -1.74,0.19 -0.5,-0.1 -0.96,-0.19 -1.33,-0.57 -0.75,-0.34 -1.74,-0.81 -2.49,-0.29 -0.79,-0.26 -1.45,-0.89 -2.32,-0.97 -0.44,-0.19 -0.05,-0.76 -0.42,-1.08 -0.52,-0.47 0.19,-1.7 -0.74,-1.7 -1.45,0.05 -3.06,1.74 -1.96,3.12 0.28,0.43 -0.05,0.59 -0.44,0.34 -0.8,-0.21 -1.66,-1.29 -2.39,-0.35 -0.48,0.5 -1.12,0.53 -1.72,0.62 -0.36,0.46 -0.93,0.09 -1.33,-0.03 -0.82,0.08 -1.47,0.67 -1.83,1.37 -0.39,0.02 -1.44,0.26 -1.39,-0.37 0.32,-0.75 -0.66,-0.79 -1.08,-0.45 -0.95,0.23 -2.53,0.04 -2.56,-1.22 -0.09,-0.8 -0.8,-0.42 -1.1,-0.02 -0.78,0.06 -0.44,1.34 -1.32,1.3 -1.02,0.42 -2.27,0.59 -3.35,0.41 -0.28,-0.56 -1.47,-0.71 -1.2,0.19 0.32,1.08 -0.54,1.92 -1.37,2.4 -0.42,0.79 -1.46,-0.1 -1.25,-0.79 0.13,-0.58 -0.81,-0.82 -0.72,-0.13 0.29,0.63 -0.63,1.39 -1.09,0.78 -0.69,0.04 -1.36,0.19 -2.05,0.15 -0.71,0.27 -1.88,1.07 -2.47,0.23 -0.18,-0.43 -0.1,-0.95 -0.46,-1.33 0.02,-0.46 0.55,-1.22 -0.15,-1.45 -0.34,0.07 -0.69,0.45 -0.94,-0.01 -0.83,-0.87 -0.83,-0.34 -1.09,-1.61 -0.38,-0.84 -0.07,-1.38 -0.49,-2.4 -0.23,-0.81 1.09,-1.67 0.31,-2.34 -0.87,-0.08 -1.57,-1.23 -2.49,-0.55 -0.67,0.49 -1.54,0.32 -2.12,1.03 -0.53,0.5 -1.32,-0.85 -1.73,-0.01 -0.39,0.84 -1.03,2.08 -2.2,1.67 -0.79,-0.14 -1.75,-0.84 -2.51,-0.4 -0.07,0.46 -0.11,0.99 -0.69,1.1 -0.58,0.13 -0.7,0.95 -0.93,1.2 -0.33,-0.73 -1.55,-0.6 -1.91,0.03 -0.47,0.11 -0.73,-0.63 -1.24,-0.27 -0.78,0.26 -1.86,0.66 -1.69,1.67 -0.71,0.22 -1.57,-0.76 -2.37,-0.38 -0.84,0.53 -1.91,1.02 -2.36,1.94 0.16,0.64 1.44,-0.01 1.45,0.63 -0.57,0.67 -1.08,1.5 -0.78,2.44 0.2,0.84 1.14,0.1 1.41,-0.3 0.74,-0.89 2.03,-0.73 2.93,-0.26 0.68,-0.04 0.18,0.89 0.63,1.19 0.76,1.25 1.7,2.47 2.71,3.48 0.55,-0.14 0.81,-1.37 1.4,-0.56 0.63,0.54 2.02,1.26 1.29,2.28 -0.65,0.87 0.78,1.27 1.42,1.29 0.97,-0.14 1.46,1.11 1.94,1.76 0.16,0.3 0.8,1.21 0.05,1.2 -0.76,-0.09 -1.81,0.16 -1.74,1.12 0.1,1.07 -0.08,2.21 -0.93,2.92 -0.55,0.42 0.13,0.78 0.2,1.15 -0.52,0.48 -1.8,0.81 -1.46,1.78 0.2,0.56 0.72,0.33 0.96,-0.02 0.79,0.14 1.75,0.34 2.12,1.13 0.63,0.28 0.71,1.24 1.5,1.2 0.63,0.28 1.09,0.99 1.77,1.11 0.01,0.94 0.78,1.74 0.84,2.63 -0.38,0.57 -0.84,1.24 -0.41,1.93 0.07,0.76 0.9,0.97 1.32,0.39 0.66,-0.12 1.02,-0.66 1.36,-1.16 0.49,-0.01 0.34,0.82 0.52,1.13 0.4,0.61 0.81,1.59 1.59,1.7 0.28,-0.31 0.23,-0.88 0.75,-1.03 0.64,-0.61 0.36,-1.81 1.4,-2.05 0.47,-0.48 1.28,0.66 0.74,1.12 -0.24,0.43 -1.31,1.17 -0.62,1.61 1.08,0.02 1.14,-1.75 2.32,-1.45 0.74,0.09 0.71,-0.77 1.22,-1.1 0.15,-0.42 0.03,-0.9 0.5,-1.22 0.77,-0.89 1.9,-1.62 3.13,-1.31 0.7,0.2 1,-0.87 1.71,-0.59 0.68,0.45 1.11,1.13 1.1,1.95 0.29,0.55 0.37,1.19 -0.02,1.66 -0.01,0.98 1.32,0.64 1.83,1.15 0.56,0.22 0.38,1.1 1.1,1.03 0.69,0.19 1.02,-0.34 1.57,-0.57 0.65,-0.6 1.5,-1.09 2.35,-0.56 1.19,0.28 2.23,-1.04 3.39,-0.52 0.88,-0.19 1.17,1.12 2.04,1.01 0.68,0.4 0.96,1.29 1.54,1.8 0.1,0.73 0.36,1.63 1.06,1.94 0.99,-0.87 2.7,-0.64 3.23,-2.01 0.38,-0.92 1.36,-1.7 2.33,-1.7 0.89,0.66 1.64,1.54 2.01,2.58 1.09,0.87 2.48,1.36 3.52,2.32 0.9,0.8 2.37,0.78 3.06,1.8 -0.01,0.88 0.8,1.67 1.65,1.71 0.38,-0.43 0.88,-0.57 1.46,-0.6 0.96,-0.37 2.31,-0.84 2.54,-1.94 -0.49,-0.53 -0.17,-1.43 -0.7,-1.91 -0.02,-0.79 1.58,-1.16 0.88,-2.02 -0.66,-0.31 0.3,-0.84 0.14,-1.35 -0.01,-1.08 0.17,-2.21 0.86,-3.04 0.2,-0.52 -0.17,-1.43 0.68,-1.4 1.03,-0.53 2.33,-1.28 2.56,-2.5 0.13,-1.32 1.11,-2.35 1.98,-3.28 0.4,-0.73 1.21,-1.44 1.17,-2.31 -0.39,-0.34 -1.24,-0.66 -0.83,-1.34 0.55,-1.1 0.78,-2.43 1.8,-3.19 0.13,-0.39 0.26,-0.69 0.57,-0.96 0.78,-1.31 0.73,-3.18 2.02,-4.12 0.09,-0.68 0.69,-1.14 0.75,-1.83 0.36,-0.26 1.16,-0.42 0.89,-1.08 -0.28,-0.48 -0.7,-0.88 -0.72,-1.46 -0.63,-0.49 -1.33,0.53 -2.07,0.28 -0.98,0.03 -1.43,-1.01 -2.33,-1.22 -0.58,-0.28 0.38,-0.85 0.5,-1.19 0.43,-0.42 0.83,-1.13 0.11,-1.51 -0.29,-0.21 -0.71,-0.66 -0.26,-0.91 0.24,-1.2 0.71,-2.33 0.77,-3.57 0.19,-0.58 0.86,-1.52 -0.1,-1.8 -0.84,-0.06 -0.37,-1.02 -0.73,-1.42 -0.06,-0.03 -0.12,-0.03 -0.18,-0.02 z"
					}
				}
			}
		}
	);

	return $.fn.mapael;

}));