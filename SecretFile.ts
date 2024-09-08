(() => {
    class SecretFile{
        secretmessage () {
            console.log("shhhhhhhhh");
        }
    }
    const secretfile = new SecretFile();
    secretfile.secretmessage();
})();