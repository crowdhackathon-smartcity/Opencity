<?php
/*
UserSpice 4
An Open Source PHP User Management System
by the UserSpice Team at http://UserSpice.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
?>
<?php
require_once 'init.php';
require_once $abs_us_root.$us_url_root.'users/includes/header.php';
require_once $abs_us_root.$us_url_root.'users/includes/navigation.php';
?>
<?php if (!securePage($_SERVER['PHP_SELF'])){die();} ?>
<div id="page-wrapper">
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12" align="center">
        <h1>Checking for updates...</h1>
        <h3>

<?php
require_once 'includes/user_spice_ver.php';
define('REMOTE_VERSION', 'http://userspice.com/version/version.txt');
$remoteVersion=trim(file_get_contents(REMOTE_VERSION));
echo "You are running version ".$user_spice_ver."<br><br>";
echo "The latest version is ".$remoteVersion."<br><br>";
if(version_compare($remoteVersion, $user_spice_ver) ==  1){
	echo "Updates are available at <a href='https://www.userspice.com/updates'>UserSpice.com/updates</a><br>";
} else {
	echo "You are running the latest version!";
}
?>
</h3>
</div> <!-- /.col -->
</div> <!-- /.row -->
</div> <!-- /.container -->
</div> <!-- /.wrapper -->


<!-- footers -->
<?php require_once $abs_us_root.$us_url_root.'users/includes/page_footer.php'; // the final html footer copyright row + the external js calls ?>

<!-- Place any per-page javascript here -->

<?php require_once $abs_us_root.$us_url_root.'users/includes/html_footer.php'; // currently just the closing /body and /html ?>
