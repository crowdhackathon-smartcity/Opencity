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


<?php
$tomQ = $db->query("SELECT * FROM audit ORDER BY id DESC LIMIT 400");
$tomC = $tomQ->count();


if($tomC > 0){
	$tom = $tomQ->results();
}

if(!empty($_POST['clear'])){
	$db->query("TRUNCATE TABLE audit");
	Redirect::to("tomfoolery.php?err=All+events+have+been+deleted");
}

?>

<?php if (!securePage($_SERVER['PHP_SELF'])){die();} ?>

<div id="page-wrapper">
	<div class="container-fluid">
		<!-- Page Heading -->
		<div class="row">
			<div class="col-sm-12" align="center">
				<div id="msg" class="bg-info text-info"></div>
				<!-- Content goes here -->
				<?php	if($tomC > 0){ ?>
					<h2>View Security Events</h2>
					If someone tries to do something without permission it is logged here.<br>
					Note that this helps check for both security breaches AND figuring out that you have not given someone proper permissions.<br><br>

					<table class="table table-hover">
						<thead>

							<tr>
								<th>Event ID</th>
								<th>User</th>
								<th>Page</th>
								<th>Timestamp</th>
								<th>IP</th>
								<!-- <th>Read</th> -->
							</tr>

						</thead>
						<tbody>
							<form class="" action="tomfoolery.php" method="post">


								<input class='btn btn-large btn-primary' type='submit' name="clear" value='Clear All Logs'/>
								<?php foreach ($tom as $m){ ?>

									<tr>
										<td><?=$m->id?></td>
										<td><?php echouser($m->user)?></td>

										<td><?php echopage($m->page);?></td>

										<td><?=$m->timestamp?></td>

										<td><?=$m->ip?></td>

										<!-- <td><?php //bin($m->viewed); ?></td> -->


									</tr>
									<?php } ?>
								</tbody>

							</table>
							<?php	}else{ ?>
								<h2 align = "center">No Events. Site is clean.</h2>
								<?php	} ?>
							</form>
						</div> <!-- /row -->

						<!-- Content Ends Here -->
					</div> <!-- /.col -->
				</div> <!-- /.row -->
			</div> <!-- /.container -->
		</div> <!-- /.wrapper -->


		<?php require_once $abs_us_root.$us_url_root.'users/includes/page_footer.php'; // the final html footer copyright row + the external js calls ?>
		<script>

		function oceSuccess(data) {
			var r = JSON.parse(data);
			jQuery('#msg').html(r.msg);
		}
		</script>
		<?php if(checkMenu(2,$user->data()->id)): ?>
			<script>
			var oceOpts = {
				url:'<?=$us_url_root?>parsers/editVR.php',
				selectOptions : {'1':'Approved','2':'Rejected','4':'Complete'},
				select2Options : {'0':'No','1':'Yes'}
			}
			jQuery('.oce').oneClickEdit(oceOpts, oceSuccess);
			</script>
		<?php endif; ?>
		<?php require_once $abs_us_root.$us_url_root.'users/includes/html_footer.php'; // currently just the closing /body and /html ?>
