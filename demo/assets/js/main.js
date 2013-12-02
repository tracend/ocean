function MainLoop()
{
	requestAnimationFrame( MainLoop );
	DEMO.Update();
}

$( function() {
	WINDOW.Initialize();
	
	var parameters = {
		alea: RAND_MT,
		generator: PN_GENERATOR,
		width: 500,
		height: 500,
		widthSegments: 150,
		heightSegments: 150,
		depth: 300,
		param: 3,
		filterparam: 1,
		filter: [ BLUR_FILTER ],
		postgen: [ MOUNTAINS_COLORS ],
		effect: [ DESTRUCTURE_EFFECT ],
		canvas: document.getElementById('heightmap'),
	};
	
	DEMO.Initialize( 'canvas-3d', parameters );
	
	WINDOW.ResizeCallback = function( inWidth, inHeight ) { DEMO.Resize( inWidth, inHeight ); };
	DEMO.Resize( WINDOW.ms_Width, WINDOW.ms_Height );
	
	MainLoop();
} );