import createPropertyCard from '../src/components/create-property-card';

const result = `<li data-id="3"><div class="card-header" style="background: #57B5E0"><img class="branding-image" src="https://i1.au.reastatic.net/170x32/b269b079bf554d2ae9ca01d578bb3d80ec5fbb4f57062bbfcd51bbf1f2d13981/main.gif"></div><div class="image"><img src="https://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"></div><div class="card-footer">Price: $826,500</div><button class="action">Add</button></li>`;

const output = createPropertyCard({price: "$826,500",agency: {brandingColors: {primary: "#57B5E0"},logo:"https://i1.au.reastatic.net/170x32/b269b079bf554d2ae9ca01d578bb3d80ec5fbb4f57062bbfcd51bbf1f2d13981/main.gif"},id: "3",mainImage:"https://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"}, 'add').outerHTML;

test('Property added successfully', () => {
    expect(output).toStrictEqual(result);
})