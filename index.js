var quotes = [
    
    ["\"Be in this world like a stranger\"", " - مـحـمـد رسـول الله"],
    ["\"Verily, with every hardship comes ease.\"", " - Qur'an 94:6"],
    ["\"Allah is with the patient.\"", " - Qur'an 2:153"],
    ["\"Speak good or remain silent.\"", " - مـحـمـد رسـول الله"],
    ["\"The best of people are those who are most beneficial to others.\"", " - مـحـمـد رسـول الله"],
    ["\"A true Muslim is one from whose tongue and hands mankind is safe.\"", " - مـحـمـد رسـول الله"],
    ["\"The best among you are those who have the best manners and character.\"", " - مـحـمـد رسـول الله"],
    ["\"Allah loves those who repent and purify themselves.\"", " - Qur'an 2:222"],
    ["\"Verily, Allah is with the patient.\"", " - Qur'an 2:153"],
    ["\"None of you truly believes until he loves for his brother what he loves for himself.\"", " - مـحـمـد رسـول الله"],
    ["\"Allah is with those who restrain themselves.\"", " - Qur'an 16:128"],
    ["\"A believer does not taunt, curse, abuse or talk indecently.\"", " - مـحـمـد رسـول الله"],
    ["\"The strongest among you is the one who controls his anger.\"", " - مـحـمـد رسـول الله"],
    ["\"The best richness is the richness of the soul.\"", " - مـحـمـد رسـول الله"],
    ["\"Heaven lies beneath the feet of your mother.\"", " - مـحـمـد رسـول الله"],
    ["\"Treat your neighbors with kindness.\"", " - مـحـمـد رسـول الله"],
    ["\"Keep peace and good relations between people.\"", " - مـحـمـد رسـول الله"],
    ["\"In the remembrance of Allah do hearts find rest.\"", " - Qur'an 13:28"],
    ["\"The best among you are those who are the best to their wives.\"", " - مـحـمـد رسـول الله"],
    ["\"Purification is half of faith.\"", " - مـحـمـد رسـول الله"]


]



function myQuotes(){
   
    var randomQuotes = Math.floor((Math.random() * quotes.length));
    document.getElementById("quotesDisplay").innerHTML = quotes[randomQuotes][0];
    document.getElementById("authorDisplay").innerHTML = quotes[randomQuotes][1];

   
    
}

myQuotes();













