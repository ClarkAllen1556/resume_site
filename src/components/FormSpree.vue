<template>
  <div>
    <form action="https://formspree.io/mpzdwlzp" method="POST">
      <div class="row mb-3">
        <div class="col">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-user-circle"></i>
            </span>
            <input
              class="form-control"
              type="text"
              name="name"
              :placeholder="$t('label.name')"
              required="required"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-file-text"></i>
            </span>
            <input
              class="form-control"
              type="text"
              name="Subject"
              :placeholder="$t('label.subject')"
              required="required"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-envelope"></i>
            </span>
            <input
              class="form-control"
              type="email"
              name="_replyto"
              :placeholder="$t('label.email')"
              required="required"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div class="form-group">
            <textarea
              class="form-control"
              name="message"
              :placeholder="$t('label.message')"
              required="required"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button
            class="btn btn-primary"
            type="submit" s
            tyle="width: 5em;"
            v-b-popover.hover.top="$t('label.send')"
          >
            <v-icon :name="'paper-plane'" />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>