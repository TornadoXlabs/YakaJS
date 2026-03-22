// Autocomplete Tests
describe('Autocomplete', [
    it('should attach autocomplete to an input', () => {
        document.body.innerHTML = '<div><input id="ac1" type="text"></div>';
        const input = document.getElementById('ac1');
        _('#ac1').autocomplete(['Apple', 'Banana', 'Cherry']);
        expect(input._yaka_autocomplete).toBeTruthy();
    }),

    it('should not re-initialise if already attached', () => {
        document.body.innerHTML = '<div><input id="ac2" type="text"></div>';
        _('#ac2').autocomplete(['Apple']);
        const input = document.getElementById('ac2');
        const cleanup = input._yaka_autocomplete_cleanup;
        _('#ac2').autocomplete(['Apple']);
        // cleanup reference should remain the same (second call is ignored)
        expect(input._yaka_autocomplete_cleanup).toBe(cleanup);
    }),

    it('should log error when data is not an array', () => {
        document.body.innerHTML = '<div><input id="ac3" type="text"></div>';
        let errorCalled = false;
        const orig = console.error;
        console.error = () => { errorCalled = true; };
        _('#ac3').autocomplete(null);
        console.error = orig;
        expect(errorCalled).toBeTruthy();
    }),

    it('should show matching suggestions on input', () => {
        document.body.innerHTML = '<div><input id="ac4" type="text"></div>';
        _('#ac4').autocomplete(['Apple', 'Apricot', 'Banana']);
        const input = document.getElementById('ac4');
        input.value = 'ap';
        input.dispatchEvent(new Event('input'));
        const items = document.querySelectorAll('.autocomplete-item');
        expect(items.length).toBe(2);
    }),

    it('should hide dropdown when input is cleared below minChars', () => {
        document.body.innerHTML = '<div><input id="ac5" type="text"></div>';
        _('#ac5').autocomplete(['Apple', 'Avocado'], { minChars: 2 });
        const input = document.getElementById('ac5');
        input.value = 'a';
        input.dispatchEvent(new Event('input'));
        const dropdown = input.parentNode.querySelector('div');
        expect(dropdown.style.display).toBe('none');
    }),

    it('should respect maxResults option', () => {
        document.body.innerHTML = '<div><input id="ac6" type="text"></div>';
        _('#ac6').autocomplete(['Apple', 'Apricot', 'Avocado', 'Artichoke'], { maxResults: 2 });
        const input = document.getElementById('ac6');
        input.value = 'a';
        input.dispatchEvent(new Event('input'));
        const items = document.querySelectorAll('.autocomplete-item');
        expect(items.length).toBe(2);
    }),

    it('should call onSelect callback when item is clicked', () => {
        document.body.innerHTML = '<div><input id="ac7" type="text"></div>';
        let selected = '';
        _('#ac7').autocomplete(['Mango', 'Melon'], { onSelect: (val) => { selected = val; } });
        const input = document.getElementById('ac7');
        input.value = 'm';
        input.dispatchEvent(new Event('input'));
        const firstItem = document.querySelector('.autocomplete-item');
        if (firstItem) {
            firstItem.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        }
        expect(selected).toBe('Mango');
    }),

    it('should set input value on item selection', () => {
        document.body.innerHTML = '<div><input id="ac8" type="text"></div>';
        _('#ac8').autocomplete(['Grape', 'Grapefruit']);
        const input = document.getElementById('ac8');
        input.value = 'grape';
        input.dispatchEvent(new Event('input'));
        const firstItem = document.querySelector('.autocomplete-item');
        if (firstItem) {
            firstItem.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        }
        expect(input.value).toBe('Grape');
    }),

    it('should show noResults message when no matches found', () => {
        document.body.innerHTML = '<div><input id="ac9" type="text"></div>';
        _('#ac9').autocomplete(['Orange'], { noResults: 'No matches found' });
        const input = document.getElementById('ac9');
        input.value = 'xyz';
        input.dispatchEvent(new Event('input'));
        const dropdown = input.parentNode.querySelector('div');
        expect(dropdown.style.display).toBe('block');
        expect(dropdown.textContent).toContain('No matches found');
    }),

    it('should provide cleanup via _yaka_autocomplete_cleanup', () => {
        document.body.innerHTML = '<div><input id="ac10" type="text"></div>';
        _('#ac10').autocomplete(['Peach', 'Pear']);
        const input = document.getElementById('ac10');
        expect(typeof input._yaka_autocomplete_cleanup).toBe('function');
        input._yaka_autocomplete_cleanup();
        expect(input._yaka_autocomplete).toBeFalsy();
    })
]);
