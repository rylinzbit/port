class MainController < ApplicationController

	def index
		render :index
	end

	def download_pdf
		send_file(
			"#{Rails.root}/public/coding_resume_online_version.pdf",
			filename: "rylin_zbitowsky_resume",
			type: "application/pdf"
		)
	end
end
