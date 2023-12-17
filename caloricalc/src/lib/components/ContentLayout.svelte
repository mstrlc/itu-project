
<!--
	author: Ondrej Seidl <xseidl06>
	date : 17.12.2023
-->
<div class=" w-full h-full bg-base-100 rounded-xl shadow-xl px-4 py-4">
    <div class ="grid grid-cols-2 gap-4 rounded-lg overflow h-full">
        <div class="cnt"><slot name="1"/></div>
        <div class="cnt"><slot name="2"/></div>
        <div class="cnt"><slot name="3"/></div>
        <div class="cnt"><slot name="4"/></div>
        
    </div>
</div>


<style>
    
    .cnt {
        @apply p-4 rounded-3xl bg-base-300 shadow-lg ;         
    }
    .cnt:nth-child(n) {
        @apply table table-xs table-pin-rows table-pin-cols;
    }

    
</style>    