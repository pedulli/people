<?php
	if($_SERVER['SERVER_NAME'] == 'people.rit.edu') {
		$site_base = '/~tgp5235/';
	} else {
		$site_base = '/';
	}
?>

<link rel="stylesheet" href="<?php echo $site_base ?>default.css">
<script src="<?php echo $site_base ?>default.js" type="module"></script>