# ACCORDION Component

#### Dependencies

	Enables linking of component-specific stylesheet to element directive:
	https://github.com/castillo-io/angular-css

#### Installation

	1. The name of the module to which the component is defined is "app". You can change
     its name to the name of your module on the last line of script.js

	2. Copy the entire component folder (ie., "accordion") into a "components" folder
	   at your web root.

	3. Place <accordion></accordion> anywhere in your page template.

	4. Include the component's script file after the call to the angularjs script. 
	   It should look similar to the following:

		     <script src="components/accordion/script.js"></script>

#### Usage

	The accordion component accepts two parameters:

	* orientation - v (veritcal), h (horizontal). Default is horizontal if not included.
	* datasource - filepath to data. Default filename is "data.json" if not included.

#### Examples

	<accordion></accordion>
	<accordion orientation="v"></accordion>
	<accordion orientation="v" datasource="json/data_en.json"></accordion>
