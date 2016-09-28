describe('Filter duration tests', function () {
  var filter, $filter,
    employees = [
      {'id': 0,'firstName': 'John', 'lastName': 'Smith', 'phoneNumber': '0442234323'},
      {'id': 1,'firstName': 'Natasha', 'lastName': 'Collins', 'phoneNumber': '0434534432'},
      {'id': 2,'firstName': 'Larry', 'lastName': 'Jones', 'phoneNumber': '0445648432'}
    ];

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');

    filter = $filter('filterName')
  }));

  it('should be defined', function () {
    expect(filter).toBeDefined()
  });

  it('should return undefined when undefined is passed in', function () {
    expect(filter(undefined)).toBeUndefined()
  });

  it('should return null when null is passed in', function () {
    expect(filter(null)).toBeNull()
  });

  it('should return the whole collection when the letter is undefined', function () {
    expect(filter(employees, undefined)).toEqual(employees);
  });

  it('should return the whole collection when the letter is null', function () {
    expect(filter(employees, null)).toEqual(employees);
  });
  
  it('should return the whole collection when the letter is empty string', function () {
    expect(filter(employees, '')).toEqual(employees);
  });

  it('should return one record for the string Love', function () {
    expect(filter(employees, 'Love')).toEqual([employees[2]]);
  });

  it('should return one record for L', function () {
    expect(filter(employees, 'L')).toEqual([employees[2]]);
  });

  it('should return two records for J', function () {
    expect(filter(employees, 'J')).toEqual([employees[0],employees[2]]);
  });
});
