describe("Array", () => {
    it("should same with javascript", function () {
        const names: string[] = ["eko", "budi", "joko"];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);
    });

    it("should support readonly array", function () {
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.log(hobbies);
        console.log(hobbies[0]);
        console.log(hobbies[1]);
    });

    it("should support tuple", function () {
        const person: readonly [string, string, number] = [
            "Eko",
            "Khannedy",
            30,
        ];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
