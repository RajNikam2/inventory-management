<?php

namespace Tests\Feature\Livewire;

use App\Http\Livewire\InventoryMngmt;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Livewire\Livewire;
use Tests\TestCase;

class InventoryMngmtTest extends TestCase
{
    /** @test */
    public function the_component_can_render()
    {
        $component = Livewire::test(InventoryMngmt::class);

        $component->assertStatus(200);
    }
}
