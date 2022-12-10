<form action="/savecustomer" method="POST">
@csrf
<label for="organization">organization</label>
<input field="text" name="organization"><br>
<label for="industry">industry</label>
<input field="text" name="industry"><br>
<label for="address">address</label>
<input field="text" name="address"><br>
<label for="country">country</label>
<input field="text" name="country"><br>
<label for="url">url</label>
<input field="text" name="url"><br>
<label for="contact_person">contact_person</label>
<input field="text" name="contact_person" placeholder="enter digits"><br>
<label for="mail">mail</label>
<input field="text" name="mail"><br>
<label for="position">position</label>
<input field="text" name="position"><br>
<label for="phone">phone</label>
<input field="text" name="phone" placeholder="enter "><br>
<label for="notes">notes</label>
<input field="text" name="notes">
<button type="submit">submit</button>
</form>