<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Auth Group
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'Api\Auth\AuthController@login');
    Route::post('register', 'Api\Auth\AuthController@register');
    Route::get('email/verify/{id}', 'Api\Auth\VerificationApiController@verify')->name('verificationapi.verify');
    Route::post('email/resend', 'Api\Auth\VerificationApiController@resendVerificationmail')->name('verificationapi.resend');
    Route::post('password/forgot', 'Api\Auth\ForgotPasswordController@sendResetLinkEmail')->name('api.forgot-password');
    Route::post('password/reset', 'Api\Auth\ResetPasswordController@reset')->name('api.reset-password');

    Route::post('logout', 'Api\Auth\AuthController@logoutCurrentUser')->middleware('jwt.verify');
    Route::post('refresh', 'Api\Auth\AuthController@refresh');

    Route::get('me', 'Api\Auth\AuthController@me')->middleware('jwt.verify');
    
});

// Universal Role Group
Route::middleware(['jwt.verify'])->group(function () {

  Route::post('settings/profile/avatar-upload', 'Api\Settings\ProfileSettingsController@avatarUpload');
	Route::post('settings/profile/email-update', 'Api\Settings\ProfileSettingsController@allEmailUpdate');
	Route::post('settings/profile/password-update', 'Api\Settings\ProfileSettingsController@allPasswordUpdate');
});

// Per Role Group
Route::middleware(['jwt.verify'])->group(function () {

	// Admin Routes
  Route::group(['middleware' => ['role:admin']], function () {
    Route::post('settings/profile/admin/profile-details-update', 'Api\Settings\ProfileSettingsController@adminProfileDetailsUpdate');
	});

	// User Routes
  Route::group(['middleware' => ['role:user']], function () {
    Route::post('settings/profile/user/profile-details-update', 'Api\Settings\ProfileSettingsController@userProfileDetailsUpdate');
	});

});


