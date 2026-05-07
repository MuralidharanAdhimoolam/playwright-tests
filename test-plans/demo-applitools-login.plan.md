# Demo Applitools Login Test Plan

## Application Overview

This test plan covers the login functionality of https://demo.applitools.com/, including positive, negative, and edge case scenarios for the login form, as well as UI elements such as the 'Remember Me' checkbox.

## Test Scenarios

### 1. Login Page Functional Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Valid Login (Happy Path)

**File:** `tests/login/happy-path.spec.ts`

**Steps:**
  1. Navigate to https://demo.applitools.com/
    - expect: Login page is displayed.
  2. Enter username 'demo' and password 'demo'.
    - expect: Username and password fields are filled.
  3. Click on 'Sign in'.
    - expect: User is redirected to the dashboard page.

#### 1.2. Invalid Login (Negative Test)

**File:** `tests/login/invalid-credentials.spec.ts`

**Steps:**
  1. Navigate to https://demo.applitools.com/
    - expect: Login page is displayed.
  2. Enter invalid username 'wronguser' and password 'wrongpass'.
    - expect: Username and password fields are filled.
  3. Click on 'Sign in'.
    - expect: User is not logged in. Error message or failed login indication is shown.

#### 1.3. Login with Empty Fields (Edge Case)

**File:** `tests/login/empty-fields.spec.ts`

**Steps:**
  1. Navigate to https://demo.applitools.com/
    - expect: Login page is displayed.
  2. Leave both username and password fields empty.
    - expect: Fields are empty.
  3. Click on 'Sign in'.
    - expect: User is not logged in. Error message or failed login indication is shown.

#### 1.4. Login with Only Username Filled (Edge Case)

**File:** `tests/login/username-only.spec.ts`

**Steps:**
  1. Navigate to https://demo.applitools.com/
    - expect: Login page is displayed.
  2. Enter username 'demo' and leave password empty.
    - expect: Username field is filled, password field is empty.
  3. Click on 'Sign in'.
    - expect: User is not logged in. Error message or failed login indication is shown.

#### 1.5. Login with Only Password Filled (Edge Case)

**File:** `tests/login/password-only.spec.ts`

**Steps:**
  1. Navigate to https://demo.applitools.com/
    - expect: Login page is displayed.
  2. Leave username empty and enter password 'demo'.
    - expect: Username field is empty, password field is filled.
  3. Click on 'Sign in'.
    - expect: User is not logged in. Error message or failed login indication is shown.

#### 1.6. Remember Me Checkbox Functionality

**File:** `tests/login/remember-me.spec.ts`

**Steps:**
  1. Navigate to https://demo.applitools.com/
    - expect: Login page is displayed.
  2. Check the 'Remember Me' checkbox.
    - expect: Checkbox is checked.
  3. Enter valid credentials and click 'Sign in'.
    - expect: User is redirected to the dashboard. Session should persist if 'Remember Me' is implemented.
