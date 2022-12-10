<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShipmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();
            $table->integer('BL');
            $table->date('sail_date');
            $table->integer('ETA');
            $table->integer('invoice_number');
            $table->integer('invoice_amount');
            $table->date('balance_due_date');
            $table->integer('FOB');
            $table->integer('commission_value');
            $table->integer('container_number');
            $table->unsignedBigInteger('shipping_line_id');
            $table->foreign('shipping_line_id')->references('id')->on('shipping_lines');
            $table->unsignedBigInteger('port_of_loading_id');
            $table->foreign('port_of_loading_id')->references('id')->on('port_of_loadings');
            $table->unsignedBigInteger('shipment_by_id');
            $table->foreign('shipment_by_id')->references('id')->on('shipment_bies');
            $table->unsignedBigInteger('destination_port_id');
            $table->foreign('destination_port_id')->references('id')->on('destination_ports');
            $table->unsignedBigInteger('order_id');
            $table->foreign('order_id')->references('id')->on('orders');

            // $table->unsignedBigInteger('POL_id');
            // $table->foreign('POL_id')->references('id')->on('POLs');
            // $table->unsignedBigInteger('destination_port_id');
            // $table->foreign('destination_port_id')->references('id')->on('destination_ports');
            // $table->unsignedBigInteger('shipment_by_id');
            // $table->foreign('shipment_by_id')->references('id')->on('shipment_bys');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shipments');
    }
}
