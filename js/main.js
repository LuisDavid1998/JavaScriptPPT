//Rules window
const open_rules = $('#rules-button');
const close_rules = $('.close');
const rules = $('#rules');

open_rules.click(() => {
    rules.fadeToggle(200);
});
close_rules.click(() => {
    rules.hide('fast');
});

//Game selection
const selection = $('#selection');
const game = $('#game');
const rock = $('#selection .rock');
const paper = $('#selection .paper');
const scissor = $('#selection .scissors');

rock.click(() => {
    selection.hide('fast');
    game.show('slow');
    game.css('display','flex');
});
paper.click(() => {
    selection.hide('fast');
    game.show('slow');
    game.css('display','flex');
});
scissor.click(() => {
    selection.hide('fast');
    game.show('slow');
    game.css('display','flex');
});

