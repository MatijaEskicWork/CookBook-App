<template>
    <div>
        <form id="dodajRecept">
            <div>
                <label for="">Ime recepta:</label>
                <input type="text" v-model="imeRecepta">
            </div>
            <div>
                <label for="">Grupa recepta:</label>
                <select name="" id="">
                    <option value="predjelo">Predjel</option>
                    <option value="glavnoJelo">Glavno jelo</option>
                    <option value="desert">Desert</option>
                    <option value="uzina">Uzina</option>
                </select>
            </div>

            <div>
                <label for="">Uputstvo za pripremu</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label for="">Trajanje spremanja recepta</label>
            </div>

            <div>
                <label for="">Tezina spremanja recepta</label>
            </div>


        </form>
    </div>
</template>