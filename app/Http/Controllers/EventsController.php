<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    public function index()
    {
      return Event::all();
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'location' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'image_url' => 'required',

        ]);

     Event::create($request->all());
    }

    public function show(string $id)
    {
        return Event::find($id);
    }

    public function update(Request $request, string $id)
    {
        $product = Event::find($id);
        $product->update($request->all());
        return $product;
    }

    public function destroy(string $id)
    {
        return Event::destroy($id);
    }
}
