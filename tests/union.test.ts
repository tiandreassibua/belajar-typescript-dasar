describe("Union", () => {
    it("should support in typescript", () => {
        let sample: number | string | boolean = "Eko";
        console.info(sample);
        
        sample = 100;
        console.info(sample);
        
        sample = true;
        console.info(sample);
    });
});
