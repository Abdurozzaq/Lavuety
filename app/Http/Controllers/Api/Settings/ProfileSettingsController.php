<?php

namespace App\Http\Controllers\Api\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

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
}
