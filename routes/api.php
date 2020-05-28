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
Route::post('login', 'Api\Auth\AuthController@login');
Route::post('register', 'Api\Auth\AuthController@register');

Route::get('email/verify/{id}', 'Api\Auth\VerificationApiController@verify')->name('verificationapi.verify');
Route::post('email/resend', 'Api\Auth\VerificationApiController@resendVerificationmail')->name('verificationapi.resend');

Route::post('password/forgot', 'Api\Auth\ForgotPasswordController@sendResetLinkEmail')->name('api.forgot-password');
Route::post('password/reset', 'Api\Auth\ResetPasswordController@reset')->name('api.reset-password');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
