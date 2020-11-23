<?php

namespace App\Http\Controllers\Api\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileSettingsController extends Controller
{
  public function avatarUpload(Request $request){
		$this->validate($request, [
			'avatar' => 'required|file|image|mimes:jpeg,png,jpg|max:2048',
		]);
 
		$user = Auth::user();

		$avatarName = $user->id.'_avatar'.time().'.png';

		$request->avatar->storeAs('avatars', $avatarName);

		$user->avatar = $avatarName;
		$user->save();

		return response()->json([
			'status' => 'success',
			'message' => 'Your Avatar has changed!'
		], 200);
	}

	public function userProfileDetailsUpdate(Request $request){
		$this->validate($request, [
			'first_name' => 'required',
			'last_name' => 'required'
		]);
 
		$user = Auth::user();
		$user->first_name = $request->first_name;
		$user->last_name = $request->last_name;
		$user->save();

		return response()->json([
			'status' => 'success',
			'message' => 'Your profile details has been updated!'
		], 200);
	}

	public function adminProfileDetailsUpdate(Request $request){
		$this->validate($request, [
			'first_name' => 'required',
			'last_name' => 'required'
		]);
 
		$user = Auth::user();
		$user->first_name = $request->first_name;
		$user->last_name = $request->last_name;
		$user->save();

		return response()->json([
			'status' => 'success',
			'message' => 'Your profile details has been updated!'
		], 200);
	}

	public function allEmailUpdate(Request $request){
		$this->validate($request, [
			'email' => 'required|email|unique:users',
		]);
 
		$user = Auth::user();
		$user->email = $request->email;
		$date = date("Y-m-d g:i:s");
    $user->email_verified_at = $date;
		$user->save();

		return response()->json([
			'status' => 'success',
			'message' => 'Your email has been changed!'
		], 200);
	}

	public function allPasswordUpdate(Request $request) {

        $this->validate($request, [
            'password' => 'required|confirmed|min:8',
            'password_confirmation' => 'required|min:8',
        ]);

        $user = User::findOrFail(Auth::user()->id);
        $user->password = Hash::make($request['password']);
        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Password Changed Successfully',
        ], 200);
        
    }
}
