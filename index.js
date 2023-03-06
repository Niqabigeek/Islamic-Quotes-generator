var quotes = [
    
    ["\"Be in this world like a stranger\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"Verily, with every hardship comes ease.\"", " - Qur'an 94:6"],
    ["\"Allah is with the patient.\"", " - Qur'an 2:153"],
    ["\"Speak good or remain silent.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"The best of people are those who are most beneficial to others.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"A true Muslim is one from whose tongue and hands mankind is safe.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"The best among you are those who have the best manners and character.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"Allah loves those who repent and purify themselves.\"", " - Qur'an 2:222"],
    ["\"Verily, Allah is with the patient.\"", " - Qur'an 2:153"],
    ["\"None of you truly believes until he loves for his brother what he loves for himself.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"Allah is with those who restrain themselves.\"", " - Qur'an 16:128"],
    ["\"A believer does not taunt, curse, abuse or talk indecently.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"The strongest among you is the one who controls his anger.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"The best richness is the richness of the soul.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"Heaven lies beneath the feet of your mother.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"Treat your neighbors with kindness.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"Keep peace and good relations between people.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"In the remembrance of Allah do hearts find rest.\"", " - Qur'an 13:28"],
    ["\"The best among you are those who are the best to their wives.\"", " - رسول الله صلى الله عليه وسلم"],
    ["\"Purification is half of faith.\"", " - رسول الله صلى الله عليه وسلم"]

]



function myQuotes(){
   
    var randomQuotes = Math.floor((Math.random() * quotes.length));
    document.getElementById("quotesDisplay").innerHTML = quotes[randomQuotes][0];
    document.getElementById("authorDisplay").innerHTML = quotes[randomQuotes][1];

   
    
}

myQuotes();













