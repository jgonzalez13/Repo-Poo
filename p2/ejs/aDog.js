let aDog = {
    name: 'Benji',
    getName () {
        return this.name
    },
    talk: () => console.log('Woof, Woof!')
}

console.log(aDog.getName())
aDog.talk()