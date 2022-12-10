<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            // $table->integer('order');
            $table->enum('status', ['delivered', 'pending']);
            $table->date('order_date');
            $table->string('proforma_invoice');
            $table->date('proforma_invoice_date');
            $table->string('proforma_invoice_value');
            $table->decimal('expected_commision');
            $table->string('po_number');
            $table->string('advance_payment');
            $table->string('advance_balance');
            $table->integer('40_container');
            $table->integer('20_container');
            $table->integer('pallets_skids');
            $table->string('others');
            $table->unsignedBigInteger('Team_members_id');
            $table->foreign('Team_members_id')->references('id')->on('team_members');
            $table->unsignedBigInteger('division_id');
            $table->foreign('division_id')->references('id')->on('divisions');
            $table->unsignedBigInteger('country_id');
            $table->foreign('country_id')->references('id')->on('countries');
            $table->unsignedBigInteger('region_id');
            $table->foreign('region_id')->references('id')->on('regions');
            // $table->unsignedBigInteger('order_status_id');
            // $table->foreign('order_status_id')->references('id')->on('order_statuses');
            $table->unsignedBigInteger('customer_id');
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->unsignedBigInteger('sales_type_id');
            $table->foreign('sales_type_id')->references('id')->on('sales_types');
            $table->unsignedBigInteger('payment_id');
            $table->foreign('payment_id')->references('id')->on('payments');

            // $table->unsignedBigInteger('destination_country_id');
            // $table->foreign('destination_country_id')->references('id')->on('destination_countries');
            $table->unsignedBigInteger('supplier_id');
            $table->foreign('supplier_id')->references('id')->on('suppliers');
            $table->unsignedBigInteger('payment_term_id');
            $table->foreign('payment_term_id')->references('id')->on('payment_terms');
            $table->unsignedBigInteger('delivery_term_id');
            $table->foreign('delivery_term_id')->references('id')->on('delivery_terms');
            $table->unsignedBigInteger('delivery_time_id');
            $table->foreign('delivery_time_id')->references('id')->on('delivery_times');
            // $table->unsignedBigInteger('payment_id');
            // $table->foreign('payment_id')->references('id')->on('payments');


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
        Schema::dropIfExists('orders');
    }
}
