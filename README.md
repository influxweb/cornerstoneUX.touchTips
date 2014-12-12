cornerstoneUX.touchTips
=======================

A responsive and mobile-friendly jQuery tool-tip plug-in.

### The What?

touchTips is a jQuery plug-in you can use to add responsive and mobile-friendly tool-tips to your site. This is a building block which can be added to the [cornerstoneUX](https://github.com/influxweb/cornerstoneUX "cornerstoneUX Development Architecture") architecture. Unlike add-ons for other frameworks and architectures, touchTips can be used on any site by adding the style-sheets provided with the download. There is no limit to the number of tool-tips you can call on a page.

### The Why?

While searching for a good solution to add tool-tips to a responsive site, I came across and article by [Osvaldas Valutis](http://osvaldas.info/elegant-css-and-jquery-tooltip-responsive-mobile-friendly) on such a topic. While his approach did everything I needed, I was not a fan of the automatic invoking method being used. I have taken his concept and expanded it to allow for multiple ways to send content to the tool-tip for display as well as flexibility in the maximum width.

### Plug-In Options

<table class="table-border table-stripe mobile-table">
	<thead>
		<tr>
			<th>Property</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-th="Property">maxWidth</td>
			<td data-th="Default">360</td>
			<td data-th="Description">This is maximum width you would like the tool-tip to take up on larger screens.</td>
		</tr>
		<tr>
			<td data-th="Property">tip</td>
			<td data-th="Default">null</td>
			<td data-th="Description">This is the content you would like to display in the tool-tip. If no value is passed, the tool-tip will display the contents of the `data-touchTips` element. You can either pass a text string to display or a selector or DOM element that you would like to display the HTML contents of. Additionally, you can pass a selector or DOM element in the `data-touchTips` value to disply the HTML contents of.</td>
		</tr>
		<tr>
			<td data-th="Property">tipClass</td>
			<td data-th="Default">'touchTips'</td>
			<td data-th="Description">This is the class applied to the tool-tip.</td>
		</tr>
	</tbody>
</table>

### Installation

To install touchTips is real easy. Just add a link to the `touchTips.css` file in the `HEAD` of your page. Add a link to the `jquery.touchTips.js` file below your link to jQuery, and add the initialization string to your page or external JavaScript file. Then, just add a `data-touchTips` attribute to the element(s) you would like to have trigger your tool-tip(s).

### Examples

[http://influxweb.github.io/cornerstoneUX.touchTips/](http://influxweb.github.io/cornerstoneUX.touchTips/)