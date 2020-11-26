//
// To clean up code in the html files, i added this js
// Instead of writing statements like "document.getElementById('id').styles.display='block'
// We can just create a function to call
//

function openSortMenu()
{
    document.getElementById('sort-options').classList.toggle('show');
}

function openPopUpID(id)
{
    document.getElementById(id).style.display='block';
}

function closePopUpID(id)
{
    document.getElementById(id).style.display='none';
}


