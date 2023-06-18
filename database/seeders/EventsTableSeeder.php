<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    $events = [
    [
        'title' => 'Outdoor Adventure Expo',
        'description' => 'Explore a wide range of outdoor activities and gear at our expo.',
        'location' => 'Denver, CO',
        'start_date' => '2023-09-05',
        'end_date' => '2023-09-07',
        'latitude' => 39.7392,
        'longitude' => -104.9903,
        'image_url' => '',
    ],
        [
        'title' => 'Technology Conference',
        'description' => 'Join industry leaders for a conference on the latest technology trends and innovations.',
        'location' => 'San Francisco, CA',
        'start_date' => '2023-09-10',
        'end_date' => '2023-09-12',
        'latitude' => 37.7749,
        'longitude' => -122.4194,
        'image_url' => '',
    ],
    [
        'title' => 'Startup Summit',
        'description' => 'Connect with entrepreneurs and investors at our annual startup summit.',
        'location' => 'Berlin, Germany',
        'start_date' => '2023-10-20',
        'end_date' => '2023-10-22',
        'latitude' => 52.5200,
        'longitude' => 13.4050,
        'image_url' => 'https://images.pexels.com/photos/16227559/pexels-photo-16227559/free-photo-of-drone-shot-of-city.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    [
        'title' => 'Tech Hackathon',
        'description' => 'Collaborate and innovate at a high-energy tech hackathon event.',
        'location' => 'San Jose, CA',
        'start_date' => '2023-11-10',
        'end_date' => '2023-11-12',
        'latitude' => 37.3382,
        'longitude' => -121.8863,
        'image_url' => 'https://images.pexels.com/photos/16206882/pexels-photo-16206882/free-photo-of-city-against-snowcapped-mountains.jpeg?auto=compress&cs=tinysrgb&w=600,',
    ],
    [
        'title' => 'Comedy Show',
        'description' => 'Laugh your heart out at a hilarious comedy show featuring renowned comedians.',
        'location' => 'Sydney, Australia',
        'start_date' => '2023-10-05',
        'end_date' => '2023-10-07',
        'latitude' => -33.8688,
        'longitude' => 151.2093,
        'image_url' => 'https://images.pexels.com/photos/16147202/pexels-photo-16147202/free-photo-of-city-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    [
        'title' => 'Sports Championship',
        'description' => 'Witness the thrill of a sports championship with top teams competing for the title.',
        'location' => 'Rio de Janeiro, Brazil',
        'start_date' => '2023-11-15',
        'end_date' => '2023-11-20',
        'latitude' => -22.9068,
        'longitude' => -43.1729,
        'image_url' => 'https://images.pexels.com/photos/16141083/pexels-photo-16141083/free-photo-of-view-of-a-modern-building.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    ];
    }
}
