/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and Mapael
*
* Map of Provence-Alpes-Cote d'Azur for Mapael
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
				france_region_93 : {
					width : 159.27597,
					height : 137.85548,
					getCoords : function (lat, lon) {
						var xfactor = 45.48385;
						var xoffset = -193.01295;
						var x = (lon * xfactor) + xoffset;
						
						var yfactor = -65.97284;
						var yoffset = 2976.3944;
						var y = (lat * yfactor) + yoffset;
						return {x : x, y : y};
					},
					elems : {
					    "department-84" : "m 33.75,46.17 c -0.4,0.4 -0.94,0.72 -1.53,0.94 -0.94,0.34 -1.11,1.34 -1.19,2.19 -0.26,0.82 -1.31,1.33 -1.36,2.11 0.42,0.25 0.98,0.57 0.5,1.05 -0.26,0.72 0.04,1.92 1.03,1.54 1.12,-0.23 2.14,0.81 3.22,0.49 0.43,-0.5 0.47,-1.27 1.09,-1.65 0.06,-0.75 0.71,-1.37 0.72,-2.16 0.53,-0.65 1.91,-0.41 2.06,-1.44 -0.4,-0.36 -1.13,-0.05 -1.48,-0.59 -0.59,-0.06 -1.08,-0.48 -0.99,-1.13 -0.12,-0.63 -0.97,-0.61 -1.31,-1.11 -0.23,-0.13 -0.48,-0.28 -0.76,-0.25 z m -10.71,6.69 c -0.7,0.06 -1.27,0.51 -2.01,0.31 -0.53,0.11 -1.53,-0.65 -1.59,0.29 -0.08,1.66 -0.66,3.7 0.77,4.99 0.63,0.56 -0.54,2.05 0.79,1.75 0.86,-0.26 0.85,0.31 0.88,0.98 0.13,0.48 0.66,0.7 0.5,1.28 0.06,1.59 -0.21,3.17 -0.54,4.68 0.19,0.63 0.45,1.45 0.97,1.82 0.48,-0.12 1.31,-0.92 1.46,0 0.33,0.67 1.38,0.83 1.33,1.71 0.59,0.74 1.02,1.6 1.57,2.36 0.57,0.28 0.94,0.75 0.95,1.42 0.19,0.59 -0.47,1.25 -1.06,0.85 -0.94,-0.03 -0.03,1.19 -0.64,1.59 -0.72,1.06 -1.74,1.89 -2.95,2.25 0.66,0.59 1.96,0.46 2.87,0.75 1.55,0.14 3.11,0.46 4.29,1.56 1.15,0.52 2.45,0.82 3.41,1.68 1.11,1.59 3.02,2.7 3.4,4.74 0.92,1.24 2.57,1.7 3.81,2.57 0.91,0.4 1.8,1.23 2.77,1.23 1.23,-0.68 2.62,-0.78 3.93,-0.32 1.27,0.04 2.22,0.8 3.17,1.53 3.19,1.93 6.67,4.28 10.59,3.84 1.37,0 2.8,-0.42 3.61,-1.58 0.79,-0.89 2.27,0.05 2.87,-1.05 0.34,-0.75 1.12,-1.08 1.5,-1.75 0.17,-1.22 -1.98,-1.31 -1.84,-2.57 0,-1.04 -1.45,-1.06 -1.62,-2.06 -0.61,-1.1 -1.64,-2.31 -3.06,-1.98 -0.95,-0.06 -1.86,0.22 -2.63,0.72 -0.68,0.08 -0.19,-1.03 -0.31,-1.39 -0.07,-1.22 1.41,-1.64 1.67,-2.76 0.3,-0.73 0.69,-1.47 0.81,-2.24 -0.42,-0.06 -0.96,-0.04 -1.06,-0.6 -0.16,-0.82 -0.82,-1.39 -1.67,-1.27 -0.62,-0.05 -1.73,-0.1 -1.5,-1.03 0.02,-1.85 1.13,-3.4 1.55,-5.14 -0.08,-0.63 0.44,-2.16 -0.37,-2.09 -0.55,0.32 -1.62,0.56 -1.66,-0.38 -0.33,-0.89 0.35,-2.29 -0.62,-2.86 -0.6,-0.16 -1.74,0.12 -1.65,-0.86 -0.1,-0.49 -0.51,-0.81 -0.7,-1.24 -0.66,-0.45 -1.69,-0.08 -2.25,-0.6 -0.28,-1.09 0.35,-2.63 -0.67,-3.41 -1.07,-0.18 -2.28,0.41 -3.35,-0.05 -0.63,-0.51 -1.41,-1.34 -2.28,-1.24 -0.52,0.17 -0.04,1.12 -0.68,0.98 -1.35,-0.02 -2.93,-0.4 -3.78,-1.49 0.38,-0.55 0.9,-1.77 0.08,-2.13 -0.38,-0.36 0.04,-1.17 0.44,-1.45 0.38,-0.32 0.75,-1.58 -0.1,-1.4 -0.58,0.81 -1.35,1.66 -2.34,2 -0.88,0.01 -1.78,-0.4 -2,-1.33 -0.6,-0.49 -1.46,0.35 -2.06,0.54 -0.96,0.72 -2.22,0.76 -3.21,1.46 -0.78,0.62 -1.73,0.8 -2.69,0.58 -1.02,0.02 -1.39,1.24 -2.23,1.68 -0.29,0.38 -1.13,0.86 -1.27,0.11 0.02,-0.8 -0.12,-1.58 -0.38,-2.3 -0.07,-1.22 -0.1,-2.91 -1.56,-3.25 -0.39,-0.48 -1.08,-0.46 -1.65,-0.45 z",
					    "department-13" : "m 23.48,79.58 c -1.25,1.4 -2.63,2.65 -4.24,3.59 -0.53,0.45 0.07,0.96 0.53,1.09 0.45,0.47 -0.39,0.67 -0.65,0.91 -0.19,0.85 0.28,1.77 0.21,2.66 0.16,1.29 -1.1,2.15 -1.34,3.35 -0.58,1.12 -0.53,2.39 0.05,3.49 0.13,0.63 -1.04,0.53 -1.42,0.34 -1.4,-1.01 -3.49,-1.36 -5,-0.42 -0.56,0.47 0.08,1.38 -0.72,1.63 -1.16,0.56 -1.53,2.01 -1.78,3.15 0.16,0.85 1.1,0.62 1.68,0.46 0.88,0.52 -0.14,1.44 -0.58,1.87 -0.46,0.6 -1.48,-0.17 -1.8,0.71 -0.01,0.61 -0.27,1.2 -0.97,1.12 -0.55,0.27 -0.96,0.76 -1.61,0.78 -0.55,0.07 -1.02,1.15 -1.54,0.48 -0.6,-0.02 0.06,0.76 -0.44,0.98 -0.92,1.06 -2.67,0.99 -3.46,2.15 -0.22,0.68 -0.62,1.56 -0.21,2.2 2.37,0.01 4.67,0.46 6.97,0.89 2.36,0.13 4.8,-1.02 7.08,0.04 0.96,0.4 2.72,0.96 2.33,2.33 -0.21,1.04 -1.76,2.02 -0.81,3.09 1.2,1.06 3.03,0.69 4.51,0.91 2.12,0.01 4.28,0.33 6.39,0.1 0.73,-0.73 -0.27,-1.68 -0.89,-2.09 -1.06,-0.93 -2.76,-1.54 -3.09,-3.04 0.09,-2.52 0.58,-5.23 -0.75,-7.54 -0.17,-0.53 -0.72,-1.41 -0.64,-1.8 1.03,0.87 1.62,2.26 2.1,3.52 0.41,2.02 -0.3,4.08 -0.13,6.08 1.08,1.64 3.11,2.29 4.59,3.49 0.38,0.43 1.45,0.61 1.29,-0.25 0,-0.78 -1.47,-0.85 -0.96,-1.7 0.66,-1.07 2.13,-0.91 3,-1.7 0.82,-0.25 1.55,0.53 2.36,0.62 0.49,0.22 0.41,1.21 1.15,0.85 1.07,-0.35 2.63,-0.36 3.14,-1.52 0.3,-1.19 0.08,-2.99 -1.39,-3.28 -0.76,-0.38 -0.92,-1.47 -0.83,-2.23 0.63,-0.7 0.13,-1.86 0.69,-2.51 0.68,0.25 0.83,1.46 1.79,1.27 0.74,0.13 2,-0.28 2.44,0.53 0.11,0.62 -0.67,1.26 0.03,1.78 0.68,0.55 1.39,1.56 2.35,1.45 0.83,-0.18 1.49,-1.34 2.36,-1.07 0.38,0.57 0.51,1.53 0.16,2.13 -1.22,0.57 -1.58,2.03 -2.85,2.5 -1.19,0.99 -2.88,0.32 -4.3,0.55 -1.21,0.17 -2.97,0.97 -2.78,2.44 0.35,1.45 1.58,2.77 3.16,2.67 2.22,0.05 4.47,0.11 6.69,-0.02 1.55,-0.29 2.86,-1.68 4.43,-1.64 1.75,0.77 2.26,3.14 1.35,4.7 0.11,0.69 1.28,0.96 0.88,1.78 -0.21,0.87 -1.42,1.9 -0.64,2.76 1.3,0.72 2.95,0.45 4.39,0.49 1.06,-0.37 2.11,1.21 3.18,0.41 0.39,-0.5 1.31,-0.66 1.42,0.14 0.43,1.02 1.5,1.64 2.44,2.1 0.62,-0.34 1.05,-1.11 1.88,-0.9 1.35,0.42 1.53,-0.67 1.49,-1.75 0.09,-0.81 0.03,-1.86 0.96,-2.18 0.57,-1.17 2.34,-1.1 2.89,-2.26 -0.3,-0.95 -1.14,-1.64 -1.57,-2.52 -0.73,-0.29 -1.98,0.39 -2.4,-0.51 0.71,-0.01 0.63,-0.79 0.63,-1.27 0.35,-0.48 0.75,-1.08 0.29,-1.65 -0.1,-0.74 -0.71,-1.63 -0.35,-2.33 0.88,-1.1 2.23,-0.12 3.34,-0.27 0.36,-0.13 1.51,-0.71 0.79,-1.02 -1.62,-0.92 -2,-2.98 -3.44,-4.09 -0.44,-0.67 0.6,-1.17 0.5,-1.88 0.04,-0.82 0.37,-1.7 0.26,-2.49 -0.62,-1.06 -2.19,-0.62 -2.74,-1.71 0.2,-0.56 1.46,-0.47 1.19,-1.35 -0.33,-1.66 0.56,-3.7 2.37,-3.99 0.86,-0.44 1.92,-0.22 2.71,-0.71 0.26,-0.52 0.97,-1.52 0.16,-1.81 -1.1,-0.32 -0.51,-2.42 -2.07,-1.92 -1.05,0.26 -1.16,1.71 -2.1,2.04 -1.06,-0.04 -2.28,0.15 -2.87,1.1 -1.68,1.38 -4.04,1.06 -6.04,0.8 -2.98,-0.81 -5.72,-2.45 -8.27,-4.13 -1.31,-1.12 -3.23,-1.36 -4.9,-1.28 -0.9,0.1 -1.76,0.99 -2.58,0.19 -1.92,-1 -3.87,-2.04 -5.6,-3.32 -0.25,-2.22 -2.38,-3.37 -3.54,-5.05 -0.86,-0.71 -1.97,-0.98 -2.97,-1.37 -1.1,-0.95 -2.44,-1.56 -3.9,-1.62 -1.16,-0.11 -2.31,-0.51 -3.45,-0.56 z",
					    "department-83" : "m 104.12,87.66 c -1.16,0.75 -2.76,0.05 -3.92,0.7 -0.27,0.89 -0.12,1.91 -0.89,2.62 -0.28,0.23 -0.64,1.32 -1.03,0.73 -0.76,-0.06 -1.65,0.12 -2.26,-0.53 -0.83,-1.02 -2.21,-1.46 -2.97,-2.49 -0.18,-0.63 -0.64,-1.26 -1.38,-1 -1.67,0.01 -1.88,1.96 -2.82,2.92 -0.6,0.73 -1.67,1.56 -2.59,0.91 -1.05,0.44 -1.22,1.95 -2.25,2.49 -0.63,0.28 -1.34,0.72 -1.25,1.48 -0.15,0.55 -0.96,1.14 -1.26,0.32 -0.2,-0.78 -1.31,-1 -1.2,-1.86 -0.01,-0.87 -0.89,-1.07 -1.56,-1.19 -0.56,-0.22 -0.55,-0.77 -0.59,-1.25 -0.11,-0.61 -1.29,-1.28 -1.44,-0.37 0.08,1.08 -1.12,1.68 -2.04,1.57 -0.31,0.19 -0.73,0.47 -0.76,-0.13 -0.24,-1.28 -1.81,-2.02 -2.99,-1.79 -0.41,0.45 -1.03,1.16 -0.82,1.78 0.46,0.08 1.08,0.21 0.97,0.85 -0.07,0.76 0.7,1.2 1.24,1.44 -0.18,0.62 -0.2,1.52 -0.71,1.95 -1.46,0.1 -3.08,0.43 -4.19,1.42 -0.86,1.01 -0.91,2.44 -0.65,3.68 -0.46,0.05 -1.63,0.55 -0.89,1.07 0.59,0.22 1.24,0.18 1.67,0.69 0.4,0.17 1.12,0.28 0.8,0.89 -0.54,1.17 0.03,2.68 -1.04,3.61 0.48,0.95 1.55,1.69 1.95,2.77 0.38,0.81 1.07,1.46 1.87,1.76 0.19,0.77 -0.91,1.01 -1.46,1.23 -0.93,-0.09 -2.28,-0.73 -2.96,0.25 -0.18,1.01 0.48,2 0.68,2.91 -0.53,0.68 -0.71,1.53 -0.77,2.34 0.61,0.56 1.96,-0.44 2.19,0.7 0.39,0.88 1.9,1.7 1.09,2.76 -0.98,0.43 -2,0.91 -2.62,1.81 -0.67,0.12 -0.96,0.79 -0.93,1.45 -0.04,0.93 -0.53,2.22 0.48,2.8 0.13,0.61 -0.33,1.59 0.6,1.76 0.75,0.32 1.26,1.28 2.21,0.92 0.46,-0.22 1.26,-0.09 0.97,0.55 -0.13,0.92 1.15,0.63 1.61,1.05 0.34,0.46 -0.7,0.54 -0.94,0.76 -0.73,0.23 -1.19,1.52 -0.18,1.68 1.26,-0.06 1.64,1.62 2.93,1.64 0.72,0.19 1.21,-0.41 1.27,-1.05 0.33,-0.57 0.94,-1.21 1.62,-0.7 0.42,0.39 1.22,-0.13 0.63,-0.53 -0.86,-0.16 -0.94,-1.52 -1.87,-1.48 -0.18,-0.55 0.84,-0.69 1.17,-0.9 0.4,-0.24 1.44,-0.41 1.14,0.39 0.15,0.85 1.4,0.37 1.97,0.51 0.69,0.13 1.88,-0.41 2.1,0.55 0.61,0.84 1.66,0.3 2.46,0.17 1.07,-0.12 2.36,0.64 2.06,1.87 -0.13,0.95 -1.22,0.72 -1.85,1 -0.35,0.72 0.92,0.52 1.31,0.49 0.78,-0.18 1.52,0.12 2.26,0.2 0.56,0.03 0.96,-0.74 0.25,-0.88 -0.85,0 -0.31,-1.07 -0.37,-1.56 0.02,-1.05 0.21,-2.48 1.45,-2.74 0.98,0.13 1.91,-0.06 2.83,-0.35 1.02,0.21 2.23,0.47 2.99,1.19 0.26,0.55 0.26,1.37 1.09,1.35 0.58,0.33 1.84,0.08 1.23,-0.77 -0.22,-0.94 -0.67,-2.39 0.49,-2.88 0.69,-0.59 1.57,-0.67 2.39,-0.89 0.54,-0.75 1.72,-0.19 2.51,-0.42 1.04,0.03 1.61,-0.84 2.2,-1.53 0.83,-0.61 2.55,-0.64 2.96,0.46 -0.24,0.61 0.35,1.22 0.93,0.82 0.82,-0.13 0.92,-0.91 0.96,-1.58 0.22,-0.91 1.33,-0.76 1.87,-1.27 0.11,-0.71 -1.27,-0.96 -0.72,-1.73 0.21,-0.95 1.73,-1.28 1.43,-2.36 -0.54,-0.85 -1.84,-0.29 -2.66,-0.39 -0.7,-0.05 -1.64,0.27 -2.25,-0.02 0.01,-0.87 1.25,-0.99 1.83,-1.4 0.61,-0.42 1.91,-0.18 1.82,-1.24 -0.09,-0.9 0.38,-1.82 1.35,-1.9 1.36,-0.26 1.18,-1.97 1.51,-2.99 0.21,-0.75 0.09,-2.16 1.04,-2.38 0.86,0.3 1.62,1.11 2.59,0.73 0.72,-0.07 1.8,0.21 2.07,-0.66 0.56,-0.18 1.67,0.17 1.67,-0.75 0.55,-0.65 1.57,-1 1.55,-2.03 0.32,-0.48 0.07,-1 -0.47,-1.13 -0.03,-0.86 -1.7,-0.78 -1.27,-1.73 0.44,-0.56 0.16,-1.18 -0.37,-1.51 -0.08,-1.03 0.93,-1.72 1.14,-2.65 -0.24,-0.53 -0.05,-1.03 0.15,-1.53 -0.04,-0.73 -0.86,-0.91 -1.44,-0.68 -1.43,0.34 -2.12,-1.34 -3.4,-1.55 -0.62,-0.63 -0.78,-1.7 -1.61,-2.07 -0.85,-0.98 0.58,-2.08 0.11,-3.17 -0.22,-0.9 -0.61,-2.1 -1.76,-2 -0.63,0.06 -0.97,-0.36 -1.26,-0.81 -0.59,-0.56 -1.36,-0.14 -1.96,0.11 -0.45,-0.27 -0.23,-1 -0.78,-1.19 -0.26,-0.93 -0.64,-2.37 -1.81,-2.4 -1.08,0.2 -1.85,1.34 -2.75,1.66 0,-0.73 -0.39,-1.55 -1.09,-1.77 -0.21,0.13 -0.42,0.26 -0.63,0.39 z",
					    "department-06" : "m 121.58,50.65 c -0.63,0.34 -1.06,1.08 -1.88,1 -0.99,0.47 -2.18,1.31 -2.26,2.49 -0.07,0.71 -0.51,1.42 -0.22,2.18 -0.56,-0.18 -1.35,-0.23 -1.52,0.47 -0.32,0.6 -1.07,0.76 -1.47,1.2 -0.15,0.71 -0.04,1.48 -0.42,2.1 0.13,0.88 -0.92,1.49 -0.66,2.41 -0.28,0.42 -0.67,0.9 -0.29,1.42 0.62,0.97 0.44,2.25 1.36,3.05 0.68,0.83 1.7,1.9 1.09,3.05 -0.52,1.32 0.66,2.41 1.75,2.88 0.33,0.53 0.52,1.2 1.2,1.44 1.14,0.44 1.45,1.63 1.76,2.67 0.4,0.39 1.1,0.39 1.28,1.05 0.21,0.62 0.71,0.99 1.31,1.15 0.6,0.52 1.42,1.14 1.62,1.88 -0.86,0.39 -1.98,0.63 -2.91,0.38 -0.84,-0.75 -1.89,-2.04 -3.17,-1.31 -0.92,0.58 -0.99,1.97 -2.14,2.3 -0.98,0.99 -2.01,-0.39 -3.09,-0.24 -0.44,0.46 0.51,1.35 -0.02,1.75 -0.72,0.06 -1.59,1.43 -0.58,1.71 0.53,0.1 1.32,0.64 1.2,1.19 -1.03,0.62 -2.28,0.69 -3.31,1.33 -0.07,0.79 0.65,1.5 0.88,2.24 0.43,0.6 1.04,-0.4 1.61,0.01 0.76,0.27 1.12,1.32 2.08,1.11 1.06,-0.19 1.15,1.25 1.49,1.94 0.39,0.76 0.02,1.44 -0.27,2.12 -0.16,0.54 -0.01,1.1 0.5,1.3 0.62,0.7 0.93,1.79 1.94,2.05 0.92,0.64 1.93,1.85 3.17,1.18 0.53,-0.17 0.98,0.53 1.11,0.93 -0.37,0.56 -0.3,1.21 -0.14,1.81 -0.71,0.81 -1.71,2.1 -0.57,3.01 -0.26,0.59 -0.59,1.77 0.42,1.76 0.39,0.4 0.92,1.26 1.55,0.68 0.79,-0.62 0.48,-1.61 0.58,-2.44 0.61,-0.96 1.83,-1.52 2.92,-1.65 1.53,0.37 2.63,-1.5 4.13,-1.18 0.3,0.26 0.78,1.29 1.16,0.64 0.36,-2.01 -0.47,-4.44 0.97,-6.13 0.78,-1.04 2.5,-0.17 3.07,-1.49 0.39,-0.7 0.8,-1.61 1.78,-1.45 0.94,-0.06 2.07,-0.34 2.92,-0.2 -0.14,0.43 -0.04,1.34 0.59,0.88 0.95,-0.37 -0.47,-1.62 0.51,-1.94 0.65,-0.17 1.92,0.27 1.96,-0.75 -0.3,-1.09 0.47,-2.06 1.42,-2.48 0.72,-0.21 0.64,1.05 1.42,0.84 0.67,0.12 1.39,-0.24 1.26,-1.01 0.07,-1.04 1.34,-1.04 2.09,-1.26 0.19,-0.87 -0.67,-1.71 -0.76,-2.59 -0.28,-1.21 -1.27,-2.89 -0.05,-3.9 0.98,-0.69 2.13,-1.4 2.2,-2.74 0.22,-0.87 0.38,-2.05 1.48,-2.15 1.3,-0.83 2.35,-2.04 3.38,-3.17 0.01,-0.87 -0.23,-2 0.73,-2.46 0.95,-0.81 1.96,-2.41 1.11,-3.59 -0.98,-0.88 -2.41,-2.11 -1.77,-3.57 0.03,-0.74 0.56,-2.07 -0.59,-2.2 -1.03,-0.34 -1.62,0.72 -2,1.45 -0.88,0.22 -1.91,-0.08 -2.71,0.51 -1.04,0.33 -2.15,0.49 -3.12,1.06 -0.87,0.42 -1.99,0.13 -2.66,0.96 -1.15,-0.01 -2.39,-0.19 -3.52,-0.44 -0.33,-0.54 -0.47,-1.41 -1.29,-1.42 -0.96,-0.23 -2.25,0.39 -2.75,-0.75 -0.46,-0.72 -1.17,-1.23 -2.04,-1.16 -1.15,-0.56 -1.53,-2.19 -2.97,-2.26 -0.51,0.07 -1.13,0.61 -1.39,-0.15 -0.8,-0.78 -1.87,-1.25 -2.8,-1.81 -0.88,-0.03 -1.91,0.7 -2.66,-0.13 -1.09,-0.81 -0.55,-2.65 -1.89,-3.31 -0.64,-0.33 -1.13,-0.89 -1.02,-1.65 -0.33,-0.97 -1.26,-1.56 -1.67,-2.48 -0.11,-0.11 -0.27,-0.18 -0.43,-0.15 z",
					    "department-04" : "m 122.96,30.94 c -0.93,0.41 -1.21,1.76 -2.33,1.91 -0.57,0.37 -0.62,1.32 -1.47,1.27 -0.95,0.29 -1.81,0.87 -2.69,1.27 -0.21,0.42 -0.09,1.03 -0.68,1.17 -0.85,0.93 -1.78,2.12 -3.14,2.21 -0.8,0.97 -0.71,2.54 -1.89,3.27 -0.73,0.72 -0.47,1.93 -0.88,2.73 -2.43,0.13 -4.92,-0.02 -7.32,-0.3 -0.62,-0.63 -1.4,-1.38 -2.38,-1.11 -0.72,-0.19 -0.58,-1.23 -1.16,-1.63 -0.59,-0.52 -1.12,-1.64 -2.02,-1.53 -0.59,0.17 -0.73,0.74 -0.23,1.1 0.25,0.83 -0.29,1.87 -0.89,2.5 -0.65,-0.26 -1.71,-1.48 -2.48,-0.58 -0.26,0.69 -1.41,0.13 -1.5,0.85 0.25,1.03 1.03,2.02 1.04,3.08 -0.32,0.65 -0.56,1.97 -1.49,1.89 -0.84,-0.77 -1.15,-2.05 -2.11,-2.73 -0.11,-0.52 -0.6,-0.65 -1.03,-0.78 -0.44,-0.57 0.06,-1.7 -0.93,-1.87 -0.77,-0.38 -1.82,-1 -2.63,-0.49 -0.25,0.52 0.06,1.52 -0.53,1.8 -0.95,-0.1 -1.94,0.51 -2.24,1.39 -1.27,0.95 -3.27,1.44 -3.58,3.27 -0.1,0.91 -0.77,1.56 -1.16,2.31 -0.45,0.3 -1.08,1.31 -0.43,1.64 0.34,0.01 0.85,-0.2 0.72,0.37 0.17,0.64 -0.08,1.15 -0.3,1.7 -0.28,0.78 0.69,1.61 0.01,2.29 -0.89,-0.6 -2.09,-1.34 -2.06,-2.55 -0.26,-0.59 -1.41,-1.29 -1.63,-0.32 -0.59,0.67 -0.83,1.83 0.07,2.35 0.55,0.39 1.1,0.84 1.21,1.52 0.52,0.35 0.29,1.35 1.1,1.49 0.66,0.09 1.52,0.53 0.89,1.25 -1.61,0.23 -3.26,-0.39 -4.66,-1.13 -1.13,0.1 -2.39,-0.03 -3.39,0.59 -0.82,-0.04 -1.33,0.82 -2.07,0.85 -0.8,-0.56 -2.05,0.16 -1.8,1.14 0.4,0.52 1.75,-0.12 1.52,0.9 0.15,1.01 -1.15,0.53 -1.8,0.54 -0.64,0 -0.53,-0.63 -0.34,-1.04 -0.12,-0.68 -0.98,-0.9 -1.23,-1.53 -0.91,-0.58 -2.43,0.68 -1.5,1.59 0.6,0.49 -0.12,1.1 -0.67,1.05 -0.69,0.1 -0.67,1.06 -1.37,1.2 -1.03,0.25 -1.6,1.25 -1.43,2.28 0.04,0.83 -0.22,2.24 1.05,1.81 1.12,-0.39 1.1,0.37 0.98,1.33 0.15,1.25 -0.41,2.34 -0.94,3.42 -0.23,0.92 -0.9,2.07 -0.38,2.99 0.69,0.52 1.64,0.41 2.39,0.53 0.38,0.71 0.63,1.67 1.59,1.74 0.04,1.24 -0.83,2.4 -1.41,3.47 -0.69,0.69 -1.28,1.63 -1.05,2.67 0.3,0.66 0.75,-0.18 1.07,-0.35 1.28,-0.07 2.78,-0.42 3.91,0.36 0.35,0.74 1.06,1.26 1.29,2.09 0.37,0.67 1.73,0.5 1.42,1.54 -0.06,1.09 1.32,1.31 1.75,2.12 0.77,-0.08 0.74,-1.72 1.74,-1.23 1.08,0.19 2.35,0.76 2.61,1.91 1.05,0.56 2.58,-0.36 2.45,-1.58 0.28,-0.47 1.06,-0.78 1.35,-0.14 0.69,0.48 0.16,1.82 1.2,1.88 0.91,0.06 1.38,0.86 1.45,1.68 0.48,0.48 0.82,1.12 1.32,1.6 0.78,0.2 0.67,-0.81 0.85,-1.25 0.92,-0.7 2.13,-1.2 2.5,-2.41 0.29,-0.34 0.74,-1.49 1.29,-0.86 0.64,0.79 1.57,-0.26 2.11,-0.67 1.05,-1.02 1.22,-3.18 3.01,-3.22 0.74,-0.27 1.44,0.22 1.49,0.98 0.99,1.26 2.53,1.98 3.74,3 0.57,0.3 1.18,-0.15 1.77,-0.07 1.09,-0.59 1.21,-1.94 1.35,-3.02 1.22,-1.13 3.24,0.03 4.48,-1.17 0.69,-0.36 1.26,0.69 1.58,1.16 0.51,0.72 1.12,-0.71 1.68,-0.93 0.48,-0.29 1.42,-0.46 1.83,-0.01 0.11,0.59 0.68,0.69 1.09,0.34 0.87,-0.46 2.05,-0.42 2.78,-1.05 -0.08,-0.83 -1.25,-0.85 -1.78,-1.21 0.03,-0.73 0.41,-1.53 1.13,-1.74 0.45,-0.69 -0.33,-1.27 -0.86,-1.57 -0.27,-0.2 -0.3,-0.57 0.14,-0.43 1.17,0.11 2.28,0.9 3.41,0.8 1.16,-0.33 1.68,-1.4 2.28,-2.32 1.04,-0.94 2.53,-0.22 3.3,0.74 0.65,0.81 1.9,0.37 2.67,0.02 0.32,-0.69 -0.57,-1.39 -1.1,-1.72 -0.92,-0.1 -1.31,-1.05 -1.75,-1.72 -0.39,-0.33 -1.27,0.01 -1.07,-0.81 0.07,-0.56 -0.29,-0.94 -0.58,-1.3 -0.29,-1.03 -1.71,-1.16 -2.09,-2.19 -0.61,-0.82 -2.08,-1.17 -2.06,-2.36 0.24,-1.03 0.52,-2.24 -0.31,-3.11 -0.64,-0.91 -1.62,-1.65 -1.59,-2.85 -0.07,-0.8 -1.19,-1.62 -0.32,-2.19 0.32,-0.5 -0.1,-1.17 0.45,-1.6 0.59,-0.49 0.17,-1.22 0.58,-1.76 0.26,-0.78 0.05,-1.92 1.09,-2.17 0.62,-0.19 0.69,-0.95 1.02,-1.32 0.43,0.14 1.28,0.19 1,-0.5 0.23,-0.68 0.37,-1.41 0.58,-2.09 0.64,-1.06 1.7,-1.91 2.94,-2.09 1.33,-0.9 0.71,-2.79 1.08,-4.13 -0.1,-1.18 1.53,-0.96 2.17,-1.51 -1.26,-1.78 -3.74,-3.22 -3.7,-5.72 -0.1,-1.36 1.17,-2.3 2.22,-2.91 1,-0.75 1.49,-1.89 1.85,-3.03 0.39,-0.55 0.93,-1.16 0.5,-1.88 -0.1,-0.84 -0.87,-1.17 -1.64,-1.18 z",
					    "department-05" : "m 92.89,0.12 c -0.92,0.25 -1.63,1.24 -1.1,2.16 0.19,0.48 0.58,1.51 -0.28,1.52 -1.03,0.5 -0.62,1.96 -1.09,2.79 -0.5,0.85 0.81,1.35 1.44,1.52 1.22,0.46 2.51,-0.16 3.7,-0.25 0.54,0.61 -0.39,1.36 0.2,2 0.46,0.55 -0.24,1.49 0.61,1.76 1.28,0.11 1.04,1.22 1,2.19 0.04,1.34 -0.36,2.63 -0.12,3.95 -0.53,0.79 -1.69,0.39 -2,-0.4 -0.51,-1.19 -2.09,-0.47 -2.63,0.32 -1,0.97 -2.33,-0.4 -3.47,0.21 -0.86,0.38 -1.73,-1.03 -2.43,-0.12 -0.98,1.01 -2.08,1.88 -3.19,2.74 -0.6,-0.52 -1.36,-2.29 -2,-0.92 -0.19,0.45 -0.47,0.63 -0.96,0.63 -0.5,0.26 -1.64,0.37 -1.59,1.05 0.28,0.44 1.46,0.83 1.02,1.47 -0.54,0.3 -1.13,0.65 -1.29,1.26 -0.7,-0.05 -1.3,0.89 -1.97,0.42 -0.72,-0.21 -1.09,0.98 -1.85,0.43 -0.58,0.09 -1.28,-0.83 -1.74,-0.36 0.25,1.1 -0.94,2.04 -0.76,3.1 0.52,0.18 0.81,0.66 0.78,1.23 -0.53,0.61 -1.46,0.99 -1.58,1.94 -0.18,0.9 -1.25,0.06 -1.79,0.33 -0.68,0.38 -1.24,1.41 -2.12,0.79 -0.93,-0.21 -2.04,-0.85 -2.96,-0.39 -0.57,0.89 0.83,2.18 -0.26,2.82 -0.65,0.74 -0.7,1.84 -1.37,2.6 -0.33,0.63 -0.72,1.79 0.31,1.98 1.01,0.26 1.61,1.36 2.24,2.13 -0.07,0.59 -1.06,0.18 -1.47,0.37 -0.61,0.27 -0.26,1.22 -0.74,1.67 -0.29,0.65 -1.01,0.59 -1.49,0.18 -0.57,-0.34 -1.27,-0.05 -1.74,-0.61 -0.9,-0.62 -2,-0.67 -3.03,-0.83 -0.44,-0.35 -1.26,-0.9 -0.84,0.18 0.34,0.85 -0.18,1.94 0.35,2.71 0.46,0.27 1.64,0.66 1.06,1.38 -0.5,0.81 -1.42,0.3 -2.05,-0.05 -0.52,-0.37 -1.25,0.09 -0.87,0.7 0.33,0.77 0.86,1.67 0.62,2.5 -0.66,0.38 0.12,0.97 0.62,0.79 0.61,0.08 0.48,1.09 1.17,1.15 0.27,0.47 0.79,0.78 1.25,0.32 0.66,-0.57 1.26,0.29 1.65,0.72 1.26,0.36 2.77,-0.21 3.93,0.31 -0.15,0.66 -1.33,1.39 -0.16,1.75 0.4,0.17 0.78,0.55 0.44,0.97 -0.13,0.75 0.67,1.6 1.39,1.06 0.44,-0.36 1.29,0.39 0.73,0.76 -0.45,0.57 -0.47,1.41 -0.01,1.94 -0.06,0.97 -0.14,2.01 0.32,2.89 0.74,-0.36 1.49,-0.84 2.32,-1.03 0.89,-0.54 2.04,-0.3 3.03,-0.47 1.36,0.7 2.91,1.36 4.48,1.28 0.82,-0.57 -0.52,-1.06 -0.97,-1.26 -0.83,-0.93 -1,-2.37 -2.18,-3.02 -0.89,-0.61 -0.47,-1.72 -0.01,-2.45 0.2,-0.82 1.38,-0.21 1.78,0.12 0.44,0.5 0.07,1.39 0.76,1.79 0.27,0.34 1.3,1.11 1.39,0.28 -0.46,-0.7 -0.4,-1.72 0.04,-2.4 0.24,-0.63 -0.28,-0.96 -0.8,-1 -0.4,-0.58 -0.19,-1.66 0.53,-1.93 1.11,-0.98 1.03,-2.64 1.93,-3.7 0.84,-0.83 2.18,-1.02 2.91,-1.96 0.3,-0.69 1.08,-1.23 1.8,-1.37 0.77,0.34 0.76,-0.99 0.72,-1.47 0.21,-0.8 1.42,-0.33 1.96,-0.19 0.77,0.29 1.87,0.6 1.76,1.64 -0.03,0.5 0.41,0.7 0.8,0.64 0.65,1.23 1.63,2.21 2.33,3.39 0.67,0.53 1.08,-0.73 1.28,-1.18 0.53,-1.39 -0.98,-2.61 -0.83,-3.9 0.95,-0.06 1.68,-0.79 2.53,-1.06 0.55,0.33 1.54,1.41 2.02,0.36 0.44,-0.73 0.48,-1.61 -0.08,-2.27 0.17,-0.42 0.83,-0.77 1.24,-0.86 0.91,1 1.94,1.96 2.46,3.23 0.51,0.3 1.23,-0.11 1.7,0.41 0.56,0.61 1.25,1.09 2.14,1 1.98,0.14 3.96,0.2 5.94,0.29 0.53,-0.84 0.08,-2.27 1.05,-2.94 1.09,-0.75 1.14,-2.19 1.48,-3.28 1.39,0.19 2.52,-0.88 3.23,-1.94 0.77,-0.23 0.49,-1.3 1.27,-1.53 0.82,-0.72 1.93,-0.86 2.92,-1.26 0.49,-0.42 0.51,-1.23 1.32,-1.26 0.83,-0.36 1.14,-1.4 1.93,-1.78 0.77,0.27 1.8,0.29 2.08,-0.66 0.66,-1.39 2.41,-1.82 3.71,-1.06 0.39,0.18 1.29,0.5 1.12,-0.27 0.09,-1.44 -0.99,-2.46 -1.92,-3.39 -0.16,-1.25 0.2,-2.81 -0.7,-3.82 0.26,-0.63 1.23,-1.27 0.5,-1.95 -0.48,-0.56 -0.7,-1.27 -1.5,-1.47 -0.9,-0.29 -2,-1.36 -2.93,-0.65 -1.03,0.93 -2.61,0.14 -3.64,-0.46 -1.39,-1.22 -3.06,-2.05 -4.52,-3.16 -0.14,-0.64 0.04,-1.36 -0.18,-2.01 0.26,-0.67 0.64,-1.39 0.32,-2.14 -0.46,-0.77 -0.27,-1.65 -0.34,-2.48 -0.67,-1.47 -2.82,-0.12 -3.69,-1.29 -0.42,-1.05 0.19,-2.49 -0.93,-3.24 -0.45,-0.58 -0.89,-1.29 -0.84,-2.02 -0.58,-0.55 -1.68,-0.52 -2.39,-0.21 -0.4,0.9 -1.61,1.62 -2.44,0.8 -0.83,-0.16 -1.61,0.86 -1.3,1.66 0.16,0.65 0.15,1.68 -0.74,1.69 -0.9,0.39 -1.54,-0.53 -2.43,-0.47 -0.85,-0.07 -1.73,-0.21 -2.49,-0.62 0.67,-1.13 -0.23,-2.74 -1.37,-3.11 -0.83,0.45 -1.99,0.92 -2.79,0.12 -0.24,-0.12 -0.29,-0.52 -0.63,-0.43 z"
					}
				}
			}
		}
	);

	return $.fn.mapael;

}));